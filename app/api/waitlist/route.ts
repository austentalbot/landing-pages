import { NextRequest, NextResponse } from "next/server";
import { getMongoDataStorage } from "@/src/server/data";
import { LANDING_PAGE_TYPES } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, role, teamSize, rolesPerQuarter, painPoint, timestamp } = body;

    // Validate email format
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!name || !company) {
      return NextResponse.json(
        { error: "Name and company are required" },
        { status: 400 }
      );
    }

    // Save to database
    const storage = getMongoDataStorage();
    await storage.ctaClickthroughService.saveCTAClickthrough({
      email,
      source: LANDING_PAGE_TYPES.APERTURE_IQ,
      questionnaireData: {
        name,
        company,
        role,
        teamSize,
        rolesPerQuarter,
        painPoint,
      },
      timestamp: timestamp || new Date().toISOString(),
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "Failed to process waitlist submission" },
      { status: 500 }
    );
  }
}
