import { Card, Divider, Group, Text, Badge } from "@mantine/core";
import Carousel from "./CarouselComponent";
import video1 from "/video1.mp4";
import QuestionsComponent from "./QuestionsComponent";
import ProductsComponent from "./ProductsComponent";
import FeaturesComponent from "./FeaturesComponent";

export default function Mid() {
  return (
    <>
      <div className="text-center flex flex-col items-center my-8">
        {/* <div className="absolute w-full ">
          <video className="videoTag" autoPlay loop muted>
            <source src={video1} type="video/mp4" />
          </video>
        </div> */}
        <img src="favicon.ico" alt="" />
        <h1 className="text-3xl font-bold">
          Ekrem Coşkun Akşehir Şubesi'ne Hoşgeldiniz.
        </h1>
      </div>
      <Carousel />
      <Divider className="mt-8" label="Sıkça Sorulan Sorular"></Divider>
      <QuestionsComponent></QuestionsComponent>
      <Divider label="Öne Çıkan Özellikler"></Divider>

      <FeaturesComponent></FeaturesComponent>
      <Divider label="Ürünler"></Divider>

      <ProductsComponent></ProductsComponent>

      <Divider label="İletişim ve Adres"></Divider>
      <div className="p-4 flex gap-4 justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.6041019915724!2d31.4134049!3d38.3581443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cfe8466f48fd61%3A0xc35a431517ea96ba!2sYaprak%20D%C3%B6ner!5e0!3m2!1str!2str!4v1753720041181!5m2!1str!2str"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
        <Card className="w-1/3" shadow="sm" padding="lg" radius="md" withBorder>
          <Text size="sm" c="dimmed">
            Adres: Selçuk, 42550 Akşehir/Konya
            <br />
            Numara: 0551 349 4922
            <br />
            E-posta: info@www.ekremcoskundoner.com.tr
          </Text>
        </Card>
      </div>
    </>
  );
}
