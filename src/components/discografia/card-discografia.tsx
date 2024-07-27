import { AlbumType } from "../../interfaces/interfaces"









export const CardDiscografia=({titulo,urlcapa}:AlbumType)=>{



    return(
        <div  className="w-[466] h-[466]  flex  rounded-2xl  relative  mx-[4px]" >
        <img width={"100%"}  src={urlcapa} />
        <div  className="z-10 opacity-100 bg-[#FFFFFF2E] rounded-xl p-2  justify-center items-center absolute bottom-[20px] left-[25%] " >
            <h3 className="text-white  font-bold " >{titulo}</h3>
        </div>
        </div>
    )
}