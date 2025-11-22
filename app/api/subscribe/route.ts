import { NextRequest, NextResponse } from "next/server";
import { getMongoDataStorage } from "@/src/server/data";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source, questionnaireData, timestamp } = body;

    // Validate email format
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Save to database
    const storage = getMongoDataStorage();
    await storage.ctaClickthroughService.saveCTAClickthrough({
      email,
      source,
      questionnaireData,
      timestamp
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Subscription received successfully"
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process subscription" },
      { status: 500 }
    );
  }
}
