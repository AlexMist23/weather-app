import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { city } = body;
  const listLimit: number = 5;
  const response = await fetch(
    "https://api.openweathermap.org/geo/1.0/direct?" +
      new URLSearchParams({
        q: city,
        limit: `${listLimit}`,
        appid: process.env.OPEN_WEATHER_API_KEY!,
      })
  );
  let result = await response.json();
  return NextResponse.json({ data: result });
}
