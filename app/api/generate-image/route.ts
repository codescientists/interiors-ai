import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';

const apiKey = process.env.IMAGINE_PRO_API_KEY;

if (!apiKey) {
  throw new Error('Missing IMAGINEPRO AI API key.');
}

export async function POST(req: NextRequest) {
  try {
    // const { prompt } = await req.json();

    // if (!prompt) {
    //   return NextResponse.json({ error: 'Missing prompt in request body.' }, { status: 400 });
    // }

    // const url = "https://api.imaginepro.ai/api/v1/midjourney/imagine";
    
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${apiKey}`,
    //   },
    //   body: JSON.stringify({
    //     prompt: prompt,
    //   }),
    // };
    
    // const response = await fetch(url, options);
    
    // // Check if the response is ok (status code 2xx)
    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }

    // const data = await response.json();

    // return NextResponse.json({ messageId: data?.messageId });


    // TODO: !!!!
    // REMOVE THIS LINE AND UNCOMMENT ALL THE ABOVE LINES
    return NextResponse.json({ messageId: "030cb85b-9dec-41e7-9a95-c978b86aef50" });

  } catch (error: any) {
    console.error('Error generating image:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
