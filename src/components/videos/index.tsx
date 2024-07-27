import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import Slider from "react-slick";
import IMAGE_PAULO_FLORES from "../../assets/images/pauloflores.svg";
import Video0 from "../../files/video_01.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "20px", // Adjusted for responsiveness
    slidesToShow: 3,
    speed: 500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding: "20px", // Adjusted for responsiveness
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: "10px", // Adjusted for responsiveness
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "10px", // Adjusted for responsiveness
            }
        }
    ]
};

export default function PlayerVideo() {

    const teste = [1, 2, 3, 4, 5, 4];

    return (
        <section className='w-full py-8 flex flex-col'>
            <div className='w-full px-4 md:px-8 lg:px-16'>
                <Slider {...settings} arrows={false} className="slider">
                    {teste.map((_, index) => (
                        <div key={index} className='mx-2 sm:mx-4 lg:mx-6'>
                            <div className='relative w-full h-64 md:h-80 lg:h-96'>
                                <Player
                                    playsInline
                                    poster={IMAGE_PAULO_FLORES}
                                    src={Video0}
                                    
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
