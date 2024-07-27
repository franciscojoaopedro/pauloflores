interface prospIngresssos {
    data: string;
    local: string;
    tituloShow: string;
  }
  
  export default function CardIngresso({ data, local, tituloShow }: prospIngresssos) {
    return (
      <div className="w-full max-w-2xl mx-auto h-auto flex flex-col md:flex-row items-center shadow-md rounded-lg overflow-hidden mb-4">
        <div className="w-full md:w-[20%] bg-black flex items-center justify-center p-4 md:py-[30px] md:px-[15px] h-full md:h-[96px]">
          <h2 className="font-light text-lg md:text-[24px] text-white">{data}</h2>
        </div>
        <div className="w-full md:w-[80%] bg-[#D9D9D9] flex flex-col md:flex-row items-center justify-between h-auto md:h-[96px] p-4">
          <div className="flex flex-col ml-2 md:ml-4">
            <p className="text-[#4B5563] text-sm md:text-xs font-normal">{local}</p>
            <h3 className="text-[#4B5563] text-lg md:text-[16px] font-medium">{tituloShow}</h3>
            <h3 className="text-[#4B5563] text-lg md:text-[16px] font-light">{local}</h3>
          </div>
          <div className="mt-4 md:mt-0 md:mr-8">
            <button className="bg-black text-white rounded-md px-4 py-2 md:p-3 hover:bg-white hover:text-black transition-colors duration-300">
              Comprar Ingressos
            </button>
          </div>
        </div>
      </div>
    );
  }
  