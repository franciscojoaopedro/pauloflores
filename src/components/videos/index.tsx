import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import Slider from "react-slick";
import IMAGE_PAULO_FLORES from "../../assets/images/pauloflores.svg"
import Video0 from "../../files/video_01.mp4"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,


    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};



export default function PlayerVideo() {



    const teste = [1, 2, 3, 4, 5, 4]



    return (

        <section className='w-full h-96  flex  flex-col ' >
            <div className='w-full px-16 ' >
                <Slider   {...settings} arrows={false} className="slider" centerMode>
                    {
                        teste.map(() => (
                            <div style={{ width: "500px", height: "400px", margin: 20 }} className='mx-[8px]' >
                                <Player
                                    playsInline
                                    poster={IMAGE_PAULO_FLORES}
                                    src={Video0}
                                                   
                                    
                                />
                            </div>
                        ))
                    }
                </Slider>
            </div>


        </section>
    )

}