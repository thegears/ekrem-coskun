import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function CarouselComponent() {
  const autoplay = useRef(Autoplay({ delay: 1500, stopOnInteraction: true }));

  return (
    <Carousel
      className="p-4"
      slideSize="50%"
      slideGap="xs"
      withControls={false}
      emblaOptions={{
        loop: true,
        dragFree: true,
        align: "center",
      }}
      plugins={[autoplay.current]}
      onTouchStart={() => autoplay.current.stop()}
      onTouchEnd={() => autoplay.current.play()}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      <Carousel.Slide>
        <Image
          src="/image1.jpeg"
          alt=""
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="/image2.jpeg"
          alt=""
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="/image3.jpeg"
          alt=""
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="/image4.jpeg"
          alt=""
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="/image5.jpeg"
          alt=""
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </Carousel.Slide>
    </Carousel>
  );
}
