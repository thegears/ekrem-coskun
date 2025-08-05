import { useLoaderData, useParams } from "react-router";
import type { Route } from "../+types/home";
import { getProducts } from "~/database/db";
import Product from "~/components/Menu/Product";

export function meta({
  params,
}: Route.MetaArgs & { params: { category?: string } }) {
  let tabTitle = "Ekrem Coşkun Akşehir Menü";
  if (params.category === "ekmek-arasi-lavas") {
    tabTitle = `Ekmek Arası & Lavaş`;
  } else if (params.category === "iskender-menu") {
    tabTitle = `İskender Menü (İçecek Dahil)`;
  } else if (params.category === "pilav-ustu") {
    tabTitle = `Pilav Üstü`;
  } else if (params.category === "kilo-ile-doner") {
    tabTitle = `Kilo ile Döner`;
  } else if (params.category === "tost") {
    tabTitle = `Tost`;
  } else if (params.category === "icecekler") {
    tabTitle = `İçecekler`;
  } else if (params.category === "dondurma") {
    tabTitle = `Dondurma`;
  }
  return [
    { title: tabTitle },
    { name: "description", content: "Ekrem Coşkun Akşehir Şubesi" },
  ];
}

export async function loader({
  params,
}: Route.LoaderArgs & { params: { category?: string } }) {
  const products = (await getProducts(params.category)) || [];
  return { products };
}

export default function menuCategory() {
  const { category } = useParams();
  const { products } = useLoaderData<typeof loader>();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {products.map((product) => (
        <Product
          key={product.name}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
