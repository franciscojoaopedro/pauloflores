import QUEMSOU from "../../assets/images/quemsou.svg"


export const BannerHeroSecond = () => {



    return (

        <section className="w-full h-[700px] bg-gradient-to-r from-[#DDDDDD] to-[#A8AAA5] flex justify-center  items-center " >
            <div className="w-[40%]" >
                <img  className="w-[100%] h-[700px] " src={QUEMSOU} alt="PAULO FLORES" />
            </div>
            <div  className="w-[40%]  flex gap-5" >
                <div>
                <div  className="mb-8 " >
                    <h2 className="font-[600] text-[42px]" >Quem sou?</h2>
                </div>
                <div className="mb-10 "  >
                    <p className="text-xl font-[400]"  >Paulo Flores (Cazenga, 1 de Julho de 1972) é um dos cantores mais populares de Angola.
                        Mudou-se para Lisboa durante sua infância.
                        Começou como cantor de kizomba, lançou o seu primeiro álbum em 1988.
                        As suas canções tratam temas diversos como o governo, a vida quotidiana dos angolanos, 
                        a guerra civil e a corrupção.
                    </p>
                </div>
                <div className="mb-10 "  >
                    <p  className="text-xl font-[400]" >Em 19 de Junho de 2022, junto ao rapper Prodígio, participou do Rock in Rio Lisboa. Essa junção teve como fruto o álbum 
                        A Bênção e a Maldição, uma fusão de ritmos advindos de um encontro entre duas gerações de músicos nascidos em Angola.
                    </p>
                </div>
                <div>
                    <p   className="text-xl font-[400]" > 
                    Já trabalhou com o cantor brasileiro Péricles num espectáculo, denominado "Entre Povos”, 
                    que procurou realçar as semelhanças culturais dos dois países, por meio da música, 
                    com o semba e o samba sendo as principais referências.
                    </p>
                </div>
                </div>
                <div className="w-[5px] h-[500px] bg-red-600"  >

                </div>
            </div>
        </section>
    )
}