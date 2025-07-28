import type { Route } from "./+types/home";
import Top from "~/components/Top/Top";
import Mid from "~/components/Mid/Mid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ekrem Coşkun Akşehir" },
    { name: "description", content: "Ekrem Coşkun Akşehir Şubesi" },
  ];
}

export default function Home() {
  return (
    <>
      <Top />
      <Mid />
    </>
  );
}
