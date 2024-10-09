import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';

const apiKey = process.env.IMAGINE_PRO_API_KEY;

if (!apiKey) {
  throw new Error('Missing IMAGINEPRO AI API key.');
}

export async function POST(req: NextRequest) {
  try {
    // @ts-ignore
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Missing prompt in request body.' }, { status: 400 });
    }

    const url = "https://api.imaginepro.ai/api/v1/midjourney/imagine";
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    };
    
    const response = await fetch(url, options);
    
    // Check if the response is ok (status code 2xx)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    const progressUrl = `https://api.imaginepro.ai/api/v1/midjourney/message/${data.messageId}`;
    
    const progressOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    };
    
    const progressResponse = await fetch(progressUrl, progressOptions);
    
    // Check if the response is ok (status code 2xx)
    if (!progressResponse.ok) {
      throw new Error(`HTTP error! Status: ${progressResponse.status}`);
    }

    const progress = await progressResponse.json();

    return NextResponse.json({ progress });
  } catch (error: any) {
    console.error('Error generating image:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
