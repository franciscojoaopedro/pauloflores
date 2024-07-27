


export default function Novidades() {





    return (
        <section  className=" w-full h-screen relative  bg-opacity-100  bg-black  bg-cover bg-center bg-paulo-flores02 bg-no-repeat " >
            <div className="flex w-full flex-col items-center " >
            {/* <div className="w-full h-[700px] relative " >
                <img  width={"100%"}  style={{objectFit:"cover"}}   src={PauloFlores} alt="Paulo Flores" />
            </div> */}
            <div className="   absolute left-[200px] top-[300px] flex   flex-col justify-center items-center " >
                <div className=" w-[500px] flex  flex-col items-center" >
                    <h3 className="text-white   font-bold text-[40px]  mb-[40px] "  >Inscreva-se para não perder nenhuma novidade.</h3>
                </div>

                <div className="w-[540px] h-[180px]  "  >
                <form  >
                    <div className="w-[100%]  flex items-center  gap-2 mb-[14px]" >
                        <input type="text" name="name"  className="w-[50%] text-[13px] text-white bg-[#2A2A2A] rounded-lg p-3 placeholder:text-[#6A6A6A] font-bold  "  placeholder="Digite o seu nome" />
                        <input type="email"  name="email" required className="w-[50%] text-[13px] text-white bg-[#2A2A2A] rounded-lg p-3 placeholder:text-[#6A6A6A] font-bold  " placeholder="Informe o seu melhor e-mail" />
                    </div>
                    <div>
                        <input   className="w-[100%] text-[13px] text-white bg-[#2A2A2A] rounded-lg p-3 placeholder:text-[#6A6A6A] font-bold  " placeholder="Seu WhatsApp com DDD" />
                    </div>
                    <div className="mt-[14px]" >
                        <button  className="w-full bg-white text-black font-bold rounded-lg h-[42px]    hover:bg-black  hover:text-white " >CONFIRMAR INSCRIÇÃO</button>
                    </div>
                </form>
                    <div className="mt-[14px]">
                        <p  className="font-normal text-[14px] text-white" >
                        Os seus dados serão utilizados estritamente para envio de informações e notícias sobre o artista Paulo Flores.
                        </p>
                    </div>
                </div>
                
            </div>
            </div>
        </section>
    )
}