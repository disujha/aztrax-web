import { NextResponse } from 'next/server';
import { getPilotRequests } from '@/lib/firebase-admin';

export async function GET() {
  try {
    const requests = await getPilotRequests();
    return NextResponse.json({
      success: true,
      count: requests.length,
      data: requests,
    });
  } catch (error) {
    console.error('Error fetching pilot requests:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve pilot requests' },
      { status: 500 }
    );
  }
}
