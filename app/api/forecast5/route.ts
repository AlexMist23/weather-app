import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { coord } = await req.json();

  const params = new URLSearchParams({
    lat: String(coord.lat),
    lon: String(coord.lon),
    appid: process.env.OPEN_WEATHER_API_KEY!,
  });

  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?${params}`);
  const data = await response.json();

  return NextResponse.json({ data });
}
