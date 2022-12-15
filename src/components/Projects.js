import { Carousel } from "@mantine/carousel";
import Footer from "./Footer";
import "../Projects.css";

export default function Project() {
  return (
    <div>
      <Carousel
        sx={{ maxWidth: 920 }}
        mx="auto"
        withIndicators
        height={"auto"}
        width={"auto"}
        styles={{
          indicator: {
            width: 12,
            height: 4,
            transition: "width 250ms ease",

            "&[data-active]": {
              width: 70,
            },
          },
        }}
      >
        <Carousel.Slide className="p">
          <img src={require("../images/villa-1/hazir-2.jpg")} alt="img" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={require("../images/villa-1/hazir3.jpg")} alt="img" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={require("../images/villa-1/hazir-render2.jpg")} alt="img" />
        </Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
      <Footer/>
    </div>
  );
}