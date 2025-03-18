import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN!;
  const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID!;
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const body = await req.json();

  const { name, phone } = body;

  const message = `🔔 *Нова заявка!*\n\n👤 Ім'я: ${name}\n📞 Телефон: ${phone}`;

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    }),
  });

  return new NextResponse("OK", { status: 200 });
}
