import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { city } = await req.json();
  const listLimit = 10;

  const params = new URLSearchParams({
    q: city,
    limit: String(listLimit),
    appid: process.env.OPEN_WEATHER_API_KEY!,
  });

  const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?${params}`);
  const data = await response.json();

  return NextResponse.json({ data });
}
