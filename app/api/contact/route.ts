import { NextRequest, NextResponse } from "next/server";
import { getMongoDataStorage } from "@/src/server/data";
import { LANDING_PAGE_TYPES } from "@/lib/constants";

const MAX_MESSAGE_LENGTH = 1200;

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = body?.name?.trim();
    const email = body?.email?.trim();
    const company = body?.company?.trim();
    const message = body?.message?.trim();
    const source = body?.source ?? LANDING_PAGE_TYPES.APERTURE_IQ;

    if (!name || !company || !message) {
      return NextResponse.json(
        { error: "Name, company, and message are required" },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "A valid email is required" },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: "Message exceeds maximum length" },
        { status: 400 }
      );
    }

    const storage = getMongoDataStorage();
    await storage.contactRequestService.saveContactRequest({
      name,
      email: email.toLowerCase(),
      company,
      message,
      source,
    });

    return NextResponse.json(
      { success: true, message: "Contact request received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact request" },
      { status: 500 }
    );
  }
}
