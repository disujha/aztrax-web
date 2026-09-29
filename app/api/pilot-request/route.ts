import { NextRequest, NextResponse } from 'next/server';
import { pilotRequestSchema, PilotRequestRecord } from '@/lib/pilot-schema';
import { savePilotRequest } from '@/lib/firebase-admin';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Anti-spam check (honeypot or empty test)
    if (body._honeypot) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // 2. Validate input schema
    const validationResult = pilotRequestSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const data = validationResult.data;

    // 3. Generate structured Pilot Request ID
    const today = new Date();
    const dateStr = today.toISOString().slice(0, 10).replace(/-/g, '');
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const pilotId = `AZT-PILOT-${dateStr}-${randomSuffix}`;

    // 4. Construct complete record
    const record: PilotRequestRecord = {
      ...data,
      id: pilotId,
      createdAt: new Date().toISOString(),
      status: 'PENDING_REVIEW',
    };

    // 5. Save securely to Firestore (or fallback in-memory)
    const saveResult = await savePilotRequest(record);

    // 6. Return structured confirmation response
    return NextResponse.json({
      success: true,
      pilotId: record.id,
      storage: saveResult.storage,
      message: 'Pilot request received. Our industrial operations team will review your site parameters and contact you.',
      leadSummary: {
        fullName: record.fullName,
        companyName: record.companyName,
        workEmail: record.workEmail,
        industry: record.industry,
        assetCount: record.assetCount,
      },
    });
  } catch (error: unknown) {
    console.error('Error handling pilot request:', error);
    return NextResponse.json(
      { error: 'An unexpected internal error occurred. Please contact pilots@aztrax.in directly.' },
      { status: 500 }
    );
  }
}
