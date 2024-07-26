import IconFacebook from "../assets/icons/Facebook.svg"
import IconDeezer from "../assets/icons/Deezer.svg"
import IconInstagram from "../assets/icons/Instagram.svg"
import IconMusic from "../assets/icons/Music.svg"
import IconSpotify from "../assets/icons/Spotify.svg"
import IconYoutube from "../assets/icons/YouTube.svg"

interface Icons{
    icons:string,
    link:string
}

export const listaSocialIcons:Icons[]=[
    {icons:IconFacebook,link:"Facebook"},
    {icons:IconSpotify,link:"Spotify"},
    {icons:IconInstagram,link:"Instragram"},
    {icons:IconDeezer,link:"Deezer"},
    {icons:IconMusic,link:"Music"},
    {icons:IconYoutube,link:"Youtube"},
]


