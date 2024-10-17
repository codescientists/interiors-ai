import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';

const apiKey = process.env.IMAGINE_PRO_API_KEY;

if (!apiKey) {
  throw new Error('Missing IMAGINEPRO AI API key.');
}

export async function GET(req: NextRequest) {
  try {
    // Extract message id (msgId) from the query parameters
    const { searchParams } = new URL(req.url);
    const msgId = searchParams.get('msgId');
    
    if (!msgId) {
      return NextResponse.json({ error: 'Missing msgId in the request' }, { status: 400 });
    }

    const progressUrl = `https://api.imaginepro.ai/api/v1/midjourney/message/${msgId}`;
    
    const progressOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    };

    const progressResponse = await fetch(progressUrl, progressOptions);

    if (!progressResponse.ok) {
      throw new Error(`HTTP error! Status: ${progressResponse.status}`);
    }

    const progress = await progressResponse.json();

    return NextResponse.json({ progress });
  } catch (error: any) {
    console.error('Error fetching progress:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
