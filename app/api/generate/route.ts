import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';

const engineId = 'stable-diffusion-v1-6';
const apiHost = process.env.API_HOST ?? 'https://api.stability.ai';
const apiKey = process.env.STABILITY_API_KEY;

if (!apiKey) {
  throw new Error('Missing Stability API key.');
}

export async function POST(request: NextRequest) {
  const { prompt, cfg_scale = 7, height = 1024, width = 1024, steps = 30, samples = 1 } = await request.json();

  if (!prompt) {
    return NextResponse.json({ error: 'Missing prompt in request body.' }, { status: 400 });
  }

  try {
    // Fetch image generation from Stability API
    const response = await fetch(
      `${apiHost}/v1/generation/${engineId}/text-to-image`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: prompt,
            },
          ],
          cfg_scale,
          height,
          width,
          steps,
          samples,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: `Non-200 response: ${errorText}` }, { status: response.status });
    }

    const responseJSON = await response.json();

    // @ts-ignore
    const images = responseJSON.artifacts.map((image) => ({
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
