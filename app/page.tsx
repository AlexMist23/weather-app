import { redirect } from "next/navigation";

export default function IndexPage() {
  redirect("/forecast");
  return <></>;
}

export const metadata = {
  title: "Weather App",
};
