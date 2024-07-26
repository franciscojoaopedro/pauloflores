import musica from "../../assets/images/musicas.svg"
import agenda from "../../assets/images/agenda.svg"
import videos from "../../assets/images/videos.svg"
import descografia from "../../assets/images/descografia.svg"

export const BannerHeroTree = () => {

    const lista=[
        {titulo:"AGENDA",subtitle:"Saiba onde estarei",urlImage:agenda},
        {titulo:"VÍDEO",subtitle:"desde o 1º álbum",urlImage:videos},
        {titulo:"DESCOGRÁFIA",subtitle:"Fique atualizado",urlImage:descografia},
        {titulo:"MÚSICA",subtitle:"Acompanhe meu dia a dia.",urlImage:musica},
    ]


    return (

        <section className="w-full h-[700px]  flex  justify-center  items-center " >
            {
                lista.map((item,index)=>(
                    <div    key={index} className="w-[382px] h-[700px]  relative " >
                            <img   className="w-[100%] h-[700px]  hover:opacity-40 "     src={item.urlImage} alt={item.titulo} />
                            <div  className="absolute top-[80%]  w-full  flex flex-col items-center justify-center " >
                                <h2 className="font-bold text-white text-[20px]" >{item.titulo}</h2>
                                <h3 className="font-light text-white text-[16px]" >{item.subtitle}</h3>
                            </div>
                    </div>
                )
                )
            }
        </section>
    )
}