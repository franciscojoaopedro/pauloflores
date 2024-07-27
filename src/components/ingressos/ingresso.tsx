import CardIngresso from "./card-ingresso"




interface prospIngresssos{
    data:string
    local:string
    tituloShow:string
   
}



export default function Ingressos(){


    const listaDeIngressos:prospIngresssos[]=[
        {data:"26/07/2023",local:"Jardins do Marquẽs",tituloShow:"Ao ar Livre Lisbon"},
        {data:"21/03/2022",local:"Luanda, Angola",tituloShow:"Kamutupu Food Market"},
        {data:"16/07/2022",local:"Lisbon Portugal",tituloShow:"Sagres Campo Pequeno"},
        {data:"26/09/2024",local:"Praça Pádua Salles",tituloShow:"Festival de Inverno 2024"},
        

    ]



    return(
        <div className="w-[100%] flex flex-col  gap-[27px] justify-center items-center  ">
                {
                    listaDeIngressos.map((ingresso,index)=>(<CardIngresso  key={index} {...ingresso} />))
                }
        </div>
    )
}