import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, date, people, message } = body;

    if (!name || !email || !people) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const endpoint = process.env.GROUP_FORM_ENDPOINT;
    if (endpoint) {
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          date,
          people,
          message,
          _subject: `Demande groupe — ${name} (${people} pers.)`,
        }),
      });
    } else {
      console.log("[group-form] received:", body);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
