




interface prospIngresssos{
    data:string
    local:string
    tituloShow:string
   
}



export default function CardIngresso({data,local,tituloShow}:prospIngresssos){



return(
    <div  className="w-[80%] h-[96px] flex items-center" >
                    <div  className=" w-[20%] bg-black flex items-center justify-center py-[30px] px-[15px]  h-[96px]" >
                        <h2  className="font-light text-[24px]  text-white" >{data}</h2>
                    </div>
                    <div  className="w-[80%] bg-[#D9D9D9] flex items-center  justify-between h-[96px]" >
                        <div className="flex flex-col ml-2"  >
                            <p  className="text-[#4B5563] text-xs font-normal" >{local}</p>
                            <h3 className="text-[#4B5563] text-[16px]  font-medium"  >{tituloShow}</h3>
                            <h3  className="text-[#4B5563] text-[16px]  font-light"  >{local}</h3>
                        </div>

                        <div  className="mr-16" >
                            <button  className="bg-black text-white rounded-md  p-3  hover:bg-white  hover:text-black " >Comprar Ingressos</button>
                        </div>
                    </div>
                </div>
)

}