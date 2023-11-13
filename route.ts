import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { coord } = body;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${process.env.API_KEY}`
  );
  const data = await response.json();
  console.log(process.env.API_KEY);
  return NextResponse.json({ data });
}
