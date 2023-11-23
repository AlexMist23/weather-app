import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { lon, lat } = body;
  const response = await fetch(
    "https://api.openweathermap.org/geo/1.0/reverse?" +
      new URLSearchParams({
        lon,
        lat,
        appid: process.env.OPEN_WEATHER_API_KEY!,
      })
  );
  let result = await response.json();
  return NextResponse.json({ data: result[0] });
}
