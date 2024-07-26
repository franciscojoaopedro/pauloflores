import { listaSocialIcons } from "../../constants/icons"











export const SocialIcons=()=>{




    return(
        <div  className="flex gap-[15px] items-center  " >
            {
                listaSocialIcons.map((icon,index)=>(
                    <a key={index}  href={icon.link} >
                        <img width={24}  height={24} src={icon.icons} />
                    </a>
                ))
            }

            </div>
    )
}