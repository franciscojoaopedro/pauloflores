import { SocialIcons } from "../social-icons/social-icons"










export const Header=()=>{


    return(
        <header  className="w-full h-[68px] flex items-center bg-black justify-center px-[104px] "  >
                <nav  className="flex items-center w-full  justify-between  " >
                    <div>
                        <a className="font-bold text-xl  text-white" >PAULO FLORES</a>
                    </div>
                    <div className="flex items-center p-[10px]  gap-3"  >
                        <a  className=" font-bold  text-[14px] text-white " >AGENDA</a>
                        <a className=" font-bold  text-[14px] text-white " >VÍDEOS</a>
                        <a className=" font-bold  text-[14px] text-white " >DISCOGRAFIA</a>
                        <a className=" font-bold  text-[14px] text-white " >MÚSICAS</a>
                        <a className=" font-bold  text-[14px] text-white " >BIOGRAFIA</a>
                        <a className=" font-bold  text-[14px] text-white " >CONTACTO</a>
                    </div>
                    <SocialIcons/>
                </nav>
        </header>
    )
}