/* Components */

import { redirect, usePathname } from "next/navigation";

export default function ForecastPage() {
  redirect("/forecast/forecast5");
  return <></>;
}

export const metadata = {
  title: "Weather App",
};
