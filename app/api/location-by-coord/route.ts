import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { lon, lat } = await req.json();

  const params = new URLSearchParams({
    lon: String(lon),
    lat: String(lat),
    appid: process.env.OPEN_WEATHER_API_KEY!,
  });

  const response = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?${params}`);
  const data = await response.json();

  return NextResponse.json({ data });
}
