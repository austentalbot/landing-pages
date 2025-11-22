import { NextRequest, NextResponse } from "next/server";

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

    // Log the received data to console
    console.log("=== New Subscription ===");
    console.log("Email:", email);
    console.log("Source:", source);
    console.log("Timestamp:", timestamp);
    if (questionnaireData) {
      console.log("Questionnaire Data:", JSON.stringify(questionnaireData, null, 2));
    }
    console.log("=======================");

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Subscription received successfully"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing subscription:", error);
    return NextResponse.json(
      { error: "Failed to process subscription" },
      { status: 500 }
    );
  }
}
