import { SocialIcons } from "../social-icons/social-icons"










export const Header=()=>{


    return(
        <header  className="w-full h-[68px] flex items-center bg-black justify-center px-[104px] "  >
                <nav  className="flex items-center w-full  justify-between  " >
                    <div>
                        <a className="font-bold text-xl  text-white" >PAULO FLORES</a>
                    </div>
                    <div className="flex items-center p-[10px]  gap-3"  >
                        <a  className=" font-bold  text-[14px] text-white   hover:text-[#FF0088] cursor-pointer   " >AGENDA</a>
                        <a className=" font-bold  text-[14px] text-white   hover:text-[#FF0088] cursor-pointer " >VÍDEOS</a>
                        <a className=" font-bold  text-[14px] text-white   hover:text-[#FF0088] cursor-pointer " >DISCOGRAFIA</a>
                        <a className=" font-bold  text-[14px] text-white   hover:text-[#FF0088] cursor-pointer " >MÚSICAS</a>
                        <a className=" font-bold  text-[14px] text-white   hover:text-[#FF0088] cursor-pointer " >BIOGRAFIA</a>
                        <a className=" font-bold  text-[14px] text-white   hover:text-[#FF0088] cursor-pointer " >CONTACTO</a>
                    </div>
                    <SocialIcons/>
                </nav>
        </header>
    )
}