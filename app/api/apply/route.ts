import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const AUDIENCES = new Set(["Artist", "Museum", "Brand"]);

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { email, audience } = (payload ?? {}) as {
    email?: unknown;
    audience?: unknown;
  };

  if (typeof email !== "string" || !EMAIL_PATTERN.test(email.trim())) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 422 },
    );
  }

  if (typeof audience !== "string" || !AUDIENCES.has(audience)) {
    return NextResponse.json(
      { error: "Audience must be Artist, Museum or Brand." },
      { status: 422 },
    );
  }

  // No CRM is connected yet: acknowledge the request without persisting it.
  return NextResponse.json(
    {
      ok: true,
      message: "Request received. We reply within two business days.",
    },
    { status: 201 },
  );
}
