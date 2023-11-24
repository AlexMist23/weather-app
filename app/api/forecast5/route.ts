import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { coord } = body;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?` +
      new URLSearchParams({
        lat: coord.lat,
        lon: coord.lon,
        appid: process.env.OPEN_WEATHER_API_KEY!,
      })
  );
  let result = await response.json();
  return NextResponse.json({ data: result });
}
