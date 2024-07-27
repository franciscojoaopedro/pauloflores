import QUEMSOU from "../../assets/images/quemsou.svg"


export const BannerHeroSecond = () => {



    return (

<section className="w-full min-h-screen bg-gradient-to-r from-[#DDDDDD] to-[#A8AAA5] flex flex-col lg:flex-row justify-center items-center px-4 lg:px-0 py-8">
  <div className="w-full lg:w-[40%] flex justify-center mb-8 lg:mb-0">
    <img className="w-full h-auto max-h-[700px]" src={QUEMSOU} alt="PAULO FLORES" />
  </div>
  <div className="w-full lg:w-[40%] flex flex-col gap-5 p-4 lg:p-0">
    <div className="mb-8">
      <h2 className="font-semibold text-3xl lg:text-[42px]">Quem sou?</h2>
    </div>
    <div className="mb-10">
      <p className="text-base lg:text-xl font-normal">
        Paulo Flores (Cazenga, 1 de Julho de 1972) é um dos cantores mais populares de Angola.
        Mudou-se para Lisboa durante sua infância. Começou como cantor de kizomba, lançou o seu
        primeiro álbum em 1988. As suas canções tratam temas diversos como o governo, a vida
        quotidiana dos angolanos, a guerra civil e a corrupção.
      </p>
    </div>
    <div className="mb-10">
      <p className="text-base lg:text-xl font-normal">
        Em 19 de Junho de 2022, junto ao rapper Projétil, participou do Rock in Rio Lisboa. Essa junção teve como fruto o álbum
        A Bênção e a Maldição, uma fusão de ritmos advindos de um encontro entre duas gerações de músicos nascidos em Angola.
      </p>
    </div>
    <div>
      <p className="text-base lg:text-xl font-normal">
        Já trabalhou com o cantor brasileiro Péricles num espectáculo, denominado "Entre Povos”, que procurou realçar as
        semelhanças culturais dos dois países, por meio da música, com o semba e o samba sendo as principais referências.
      </p>
    </div>
  </div>
  <div className="hidden lg:block w-[5px] h-[500px] bg-red-600"></div>
</section>

    )
}