import Product from "~/components/Menu/Product";
import type { Route } from "../+types/home";
import Category from "~/components/Menu/Category";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ekrem Coşkun Akşehir Menü" },
    { name: "description", content: "Ekrem Coşkun Akşehir Şubesi" },
  ];
}

export default function Menu() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <Category
          name="Ekmek Arası & Lavaş"
          image="tavukdoner.jpg"
          categoryHref="/menu/ekmek-arasi-lavas"
        />
        <Category
          name="İskender Menü (İçecek Dahil)"
          image="iskender.jpg"
          categoryHref="/menu/iskender-menu"
        />
        <Category
          name="Pilav Üstü"
          image="pilavustu.jpg"
          categoryHref="/menu/pilav-ustu"
        />
        <Category
          name="Kilo ile Döner"
          image="kiloiledoner.jpg"
          categoryHref="/menu/kilo-ile-doner"
        />
        <Category name="Tost" image="tost.jpg" categoryHref="/menu/tost" />
        <Category
          name="İçecekler"
          image="icecekler.jpg"
          categoryHref="/menu/icecekler"
        />
        <Category
          name="Dondurma"
          image="dondurma.jpg"
          categoryHref="/menu/dondurma"
        />
      </div>
    </>
  );
}
