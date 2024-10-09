
import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';
import FormData from 'form-data';

const engineId = 'stable-diffusion-v1-6';
const apiHost = process.env.API_HOST ?? 'https://api.stability.ai';
const apiKey = process.env.STABILITY_API_KEY;

if (!apiKey) {
  throw new Error('Missing Stability API key.');
}

export async function POST(req: NextRequest) {
  try {
    const { imageStrength = 0.35, cfg_scale = 7, steps = 30, samples = 1 } = req.body;
    const data = await req.formData();

    const file = data.get("image");
    const prompt = data.get("prompt");
    
    if (!file) {
      return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const imageFile = Buffer.from(await file.arrayBuffer());
    

    if (!prompt || !imageFile) {
      return NextResponse.json({ error: 'Missing prompt or image in request body.' }, { status: 400 });
    }

    // Read the uploaded image file from the file path
    const formData = new FormData();
    formData.append('init_image', imageFile); // Update with actual path
    formData.append('init_image_mode', 'IMAGE_STRENGTH');
    formData.append('image_strength', imageStrength);
    formData.append('text_prompts[0][text]', prompt);
    formData.append('cfg_scale', cfg_scale);
    formData.append('samples', samples);
    formData.append('steps', steps);


    // Make the API request to Stability AI
    const response = await fetch(`${apiHost}/v1/generation/${engineId}/image-to-image`, {
      method: 'POST',
      headers: {
        ...formData.getHeaders(),
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: `Non-200 response: ${errorText}` }, { status: response.status });
    }

    const responseJSON = await response.json();

    // Map the generated images (artifacts) and return the result
    const images = responseJSON.artifacts.map((image: any) => ({
      base64: image.base64,
      seed: image.seed,
      finishReason: image.finishReason,
    }));


    return NextResponse.json({ images });
  } catch (error: any) {
    console.error('Error generating image:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
