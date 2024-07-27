

export default function Novidades() {
  return (
    <section className="w-full h-screen relative bg-opacity-100 bg-black bg-cover bg-center bg-paulo-flores02 bg-no-repeat">
      <div className="flex flex-col items-center justify-center w-full h-full px-4 py-8">
        {/* Background Image Commented Out */}
        {/* <div className="w-full h-full relative">
          <img
            width={"100%"}
            style={{ objectFit: "cover" }}
            src={PauloFlores}
            alt="Paulo Flores"
          />
        </div> */}

        <div className="absolute flex flex-col items-center justify-center w-full max-w-lg px-4 py-8 text-center">
          <div className="mb-8">
            <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-8">
              Inscreva-se para não perder nenhuma novidade.
            </h3>
          </div>

          <div className="w-full max-w-xl">
            <form>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  className="w-full md:w-1/2 text-sm md:text-base text-white bg-[#2A2A2A] rounded-lg p-3 placeholder:text-[#6A6A6A] font-bold"
                  placeholder="Digite o seu nome"
                />
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full md:w-1/2 text-sm md:text-base text-white bg-[#2A2A2A] rounded-lg p-3 placeholder:text-[#6A6A6A] font-bold"
                  placeholder="Informe o seu melhor e-mail"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="whatsapp"
                  className="w-full text-sm md:text-base text-white bg-[#2A2A2A] rounded-lg p-3 placeholder:text-[#6A6A6A] font-bold"
                  placeholder="Seu WhatsApp com DDD"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold rounded-lg h-12 hover:bg-black hover:text-white transition-colors duration-300"
                >
                  CONFIRMAR INSCRIÇÃO
                </button>
              </div>
            </form>
            <div>
              <p className="font-normal text-sm md:text-base text-white">
                Os seus dados serão utilizados estritamente para envio de informações e notícias sobre o artista Paulo Flores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
