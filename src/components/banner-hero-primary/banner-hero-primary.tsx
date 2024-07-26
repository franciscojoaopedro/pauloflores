import IMAGE_PAULO_FLORES from "../../assets/images/pauloflores.svg"
import { SocialIcons } from "../social-icons/social-icons"



export const BannerHeroPrimary=()=>{



    return(

        <section className="w-full  h-screen relative  " >
            <img className="w-full  "     src={IMAGE_PAULO_FLORES} alt="PAULO FLORES" />
        
            <div  className="   absolute z-10 top-[215px] left-[199px] " >
                <div className="flex  flex-col items-center" >
                <h1  className="text-white  text-[128px]  "  >PAULO</h1>
                <h1  className="text-white text-[128px] ">FLORES</h1>
                </div>
                <div className="flex  flex-col items-center"   >
                    <h4 className="text-white   font-light text-[32px]  mb-[70px] ">WEBSITE OFICIAL</h4>
                    <SocialIcons/>
                </div>
               
            </div>
        </section>
    )
}