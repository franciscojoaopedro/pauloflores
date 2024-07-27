import IMAGE_PAULO_FLORES from "../../assets/images/pauloflores.svg"
import { SocialIcons } from "../social-icons/social-icons"



export const BannerHeroPrimary = () => {



    return (

        <section className="w-full h-screen relative overflow-hidden">
            <img className="w-full h-full object-cover" src={IMAGE_PAULO_FLORES} alt="PAULO FLORES" />

            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-white text-5xl md:text-7xl lg:text-[128px] leading-none">PAULO</h1>
                    <h1 className="text-white text-5xl md:text-7xl lg:text-[128px] leading-none">FLORES</h1>
                </div>
                <div className="flex flex-col items-center mt-4 md:mt-6 lg:mt-10">
                    <h4 className="text-white font-light text-xl md:text-2xl lg:text-[32px] mb-4 md:mb-6 lg:mb-[70px]">WEBSITE OFICIAL</h4>
                    <SocialIcons />
                </div>
            </div>
        </section>

    )
}