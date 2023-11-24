/* Components */

import { redirect, usePathname } from "next/navigation";

export default function ForecastPage() {
  redirect('/forecast/today')
  return <></>;
}

export const metadata = {
  title: "Weather App",
};
