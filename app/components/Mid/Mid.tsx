import { Card, Divider, Text, Image } from "@mantine/core";
import Carousel from "./CarouselComponent";
//import video1 from "/video1.mp4";
import QuestionsComponent from "./QuestionsComponent";
import ProductsComponent from "./ProductsComponent";
import FeaturesComponent from "./FeaturesComponent";
import { useNavigate } from "react-router";

export default function Mid() {
  const navigate = useNavigate();
  return (
    <>
      <div id="home" className="text-center flex flex-col items-center my-8">
        {/* <div className="absolute w-full ">
          <video className="videoTag" autoPlay loop muted>
            <source src={video1} type="video/mp4" />
          </video>
        </div> */}
        <Image h={200} w={200} src="favicon.ico" alt="" />
        <h1 className="text-3xl font-bold">
          Ekrem Coşkun Akşehir Şubesi'ne Hoşgeldiniz.
        </h1>
      </div>
      <Carousel />
      <Divider
        className="mt-8"
        label="Sıkça Sorulan Sorular"
        color="gray"
      ></Divider>
      <QuestionsComponent></QuestionsComponent>
      <Divider label="Öne Çıkan Özellikler" color="gray"></Divider>

      <FeaturesComponent></FeaturesComponent>
      <Divider label="Ürünler" color="gray"></Divider>

      <ProductsComponent></ProductsComponent>

      <Divider label="İletişim ve Adres" color="gray"></Divider>
      <div
        id="iletisim"
        className="p-4 flex gap-4 flex-col md:flex-row justify-center items-center"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.6057052316964!2d31.41365330000001!3d38.3581072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cfe99d1b6bd39b%3A0xef004936a66305e8!2sEkrem%20Co%C5%9Fkun%20Ak%C5%9Fehir!5e0!3m2!1str!2str!4v1754333052512!5m2!1str!2str"
          width="600"
          height="450"
          className="border-0 w-full md:w-2/3"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Card
          className="w-full md:w-1/3"
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
        >
          <Text size="sm" c="dimmed">
            Selçuk, 32807. Sok No:11, 42550 Akşehir/Konya
            <br />
            Numara: 0551 349 4922
            <br />
            E-posta: info@www.ekremcoskundoner.com.tr
            <br />
            <a
              className="mt-6 inline-block"
              href="https://www.instagram.com/aksehirekremcoskun1"
            >
              <Image w={36} h={36} src="instagram.svg" alt={""}></Image>
            </a>
          </Text>
        </Card>
      </div>
    </>
  );
}
