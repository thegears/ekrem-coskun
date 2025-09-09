import type { Route } from "./+types/home";
import Top from "~/components/Top/Top";
import Mid from "~/components/Mid/Mid";
import { getOnoff } from "~/database/security";
import { useLoaderData } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ekrem Coşkun Akşehir" },
    { name: "description", content: "Ekrem Coşkun Akşehir Şubesi" },
  ];
}

export async function loader() {
  const onoff = await getOnoff();

  return onoff;
}

export default function Home() {
  const loaderData = useLoaderData();
  return (
    <>
      {loaderData ? (
        <div>
          <Top />
          <Mid />
        </div>
      ) : (
        <div>Sitenin parası ödenmediği site kapalıdır.</div>
      )}
    </>
  );
}
