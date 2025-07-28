import { Carousel } from "@mantine/carousel";

export default function CarouselComponent() {
  return (
    <Carousel
      className="shadow-xl p-4"
      slideSize="40%"
      slideGap="xs"
      controlsOffset="xl"
      controlSize={36}
      withControls={true}
      withIndicators
      emblaOptions={{
        loop: true,
        dragFree: true,
        align: "center",
      }}
    >
      <Carousel.Slide>
        <img
          src="public/image1.jpeg"
          alt=""
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="public/image2.jpeg"
          alt=""
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="public/image3.jpeg"
          alt=""
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="public/image4.jpeg"
          alt=""
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="public/image5.jpeg"
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
