import Ingressos from "../ingressos/ingresso"







export const BannerHeroFor = () => {




    return (

        <section className="w-full h-[700px]  flex  flex-col  items-center " >
          <div  className="w-full flex justify-center items-center" >

          <div className=" w-[100%] justify-center items-center flex  flex-col"   >
            <div className="mt-[120px] mb-[39px]" >
                <h2  className="font-[300] text-3xl" >AGENDA DE SHOWS</h2>
            </div>
            <Ingressos/>
            </div>
          </div>
        </section>
    )
}