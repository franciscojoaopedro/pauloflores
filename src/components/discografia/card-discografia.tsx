import { AlbumType } from "../../interfaces/interfaces";

export const CardDiscografia = ({ titulo, urlcapa }: AlbumType) => {
    return (
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 sm:mx-4 lg:mx-6">
            <div className="relative rounded-2xl overflow-hidden">
                <img 
                    src={urlcapa} 
                    alt={titulo} 
                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover" 
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF2E] rounded-xl p-2 z-10 text-center">
                    <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">{titulo}</h3>
                </div>
            </div>
        </div>
    );
};
