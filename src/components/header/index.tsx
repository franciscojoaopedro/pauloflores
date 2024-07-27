import { SocialIcons } from "../social-icons/social-icons";

export const Header = () => {
    return (
        <header className="w-full h-[68px] flex items-center bg-black justify-between px-4 md:px-8 lg:px-[104px]">
            <div className="flex items-center justify-between w-full">
                <div className="text-white font-bold text-xl">
                    <a href="#">PAULO FLORES</a>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <a className="font-bold text-[14px] text-white hover:text-[#FF0088] cursor-pointer" href="#">AGENDA</a>
                    <a className="font-bold text-[14px] text-white hover:text-[#FF0088] cursor-pointer" href="#">VÍDEOS</a>
                    <a className="font-bold text-[14px] text-white hover:text-[#FF0088] cursor-pointer" href="#">DISCOGRAFIA</a>
                    <a className="font-bold text-[14px] text-white hover:text-[#FF0088] cursor-pointer" href="#">MÚSICAS</a>
                    <a className="font-bold text-[14px] text-white hover:text-[#FF0088] cursor-pointer" href="#">BIOGRAFIA</a>
                    <a className="font-bold text-[14px] text-white hover:text-[#FF0088] cursor-pointer" href="#">CONTACTO</a>
                </div>
                <div className="hidden md:flex">
                    <SocialIcons />
                </div>
            </div>
        </header>
    );
};
