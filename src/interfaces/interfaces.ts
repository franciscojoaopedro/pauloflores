





interface AlbumType{
    titulo:string
    urlcapa:string
    musicas:Musicas[]
}
interface Musicas{
    titulo:string
    durancao:string
}

export type{AlbumType}