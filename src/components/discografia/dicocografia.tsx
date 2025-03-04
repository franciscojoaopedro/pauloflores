import { AlbumType } from "../../interfaces/interfaces";
import Capa01 from "../../assets/capas_albuns/capa_01.png";
import Capa02 from "../../assets/capas_albuns/capa_02.png";
import Capa03 from "../../assets/capas_albuns/capa_03.png";
import Capa04 from "../../assets/capas_albuns/capa_04.png";
import { CardDiscografia } from "./card-discografia";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
};

export default function Discografia() {

  const albuns: AlbumType[] = [
    { titulo: "Bolo de Aniversário (2018)", urlcapa: Capa01, musicas: [] },
    { titulo: "Bolo de Aniversário (2018)", urlcapa: Capa02, musicas: [] },
    { titulo: "Bolo de Aniversário (2018)", urlcapa: Capa03, musicas: [] },
    { titulo: "Bolo de Aniversário (2018)", urlcapa: Capa04, musicas: [] },
  ];

  return (
    <section className="w-full relative py-8 px-4 md:px-16 bg-gray-100">
      <div className="flex flex-col w-full mx-auto">
        <div className="mb-8 mt-4">
          <h2 className="font-medium text-black text-2xl md:text-3xl">DISCOGRAFIA</h2>
        </div>
        <div className="w-full">
          <Slider {...settings} arrows={false} className="slider">
            {albuns.map((album, index) => (
              <CardDiscografia key={index} {...album} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
