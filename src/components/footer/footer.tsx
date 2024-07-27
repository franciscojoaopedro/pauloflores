import IconEmail from "../../assets/images/icon-email.svg"
import IconMarketing from "../../assets/images/icon-marketing.svg"
import ImageSony from "../../assets/images/sony.svg"
import ImageLgpd from "../../assets/images/canallgpd.svg"










export default function Footer(){



    return(
        <footer className="w-full h-[854px] flex flex-col relative bg-footer-paulo-flores bg-center bg-cover " >
            <div className="   h-[854px] flex  justify-center items-center " >
            <div  className="flex items-center justify-center w-full  gap-[120px] " >
                <div className="flex justify-center  items-center gap-[19px]"   >
                    <img  src={IconEmail} />
                    <div>
                        <h3 className="text-[14px] font-bold text-white" >CONTATO PARA SHOWS</h3>
                        <p  className="text-[14px] font-medium text-white" >comercial@pauloflores.co.ao</p>
                    </div>
                </div>
                <div  className="flex items-center gap-[19px]"  >
                    <img  src={IconMarketing} />
                    <div>
                        <h3 className="text-[14px] font-bold text-white" >MARKETING</h3>
                        <p  className="text-[14px] font-medium text-white" >publicidade@pauloflores.co.ao</p>
                    </div>
                </div>
            </div>
            </div>
           <div  className=" w-full absolute bottom-0 left-0 mb-6  flex flex-col" >
            <div className="w-full h-[2px] bg-white  mb-5" ></div>

           <div  className=" w-full  flex  justify-between px-16 " >
               
                <div  className="flex  items-center gap-2" >
                    <p  className="text-[14px] font-medium text-white" >Todos os direitos reservados 2024 © Paulo Flores</p>
                    <img src={ImageLgpd} alt="canal de comunicação lgpd" />
                </div>
               
                <div>
                    <img src={ImageSony} alt="sony" />
                </div>
            </div>
           </div>
        </footer>
    )
}