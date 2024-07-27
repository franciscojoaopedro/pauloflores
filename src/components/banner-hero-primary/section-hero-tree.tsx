import musica from "../../assets/images/musicas.svg";
import agenda from "../../assets/images/agenda.svg";
import videos from "../../assets/images/videos.svg";
import descografia from "../../assets/images/descografia.svg";

export const BannerHeroTree = () => {
    const lista = [
        { titulo: "AGENDA", subtitle: "Saiba onde estarei", urlImage: agenda },
        { titulo: "VÍDEO", subtitle: "desde o 1º álbum", urlImage: videos },
        { titulo: "DESCOGRÁFIA", subtitle: "Fique atualizado", urlImage: descografia },
        { titulo: "MÚSICA", subtitle: "Acompanhe meu dia a dia.", urlImage: musica },
    ];

    return (
        <section className="w-full h-auto flex flex-wrap justify-center bg-black items-center py-4">
            {lista.map((item, index) => (
                <div
                    key={index}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto relative mb-4"
                >
                    <img
                        className="w-full h-auto object-cover rounded-lg hover:opacity-70 transition-opacity duration-300"
                        src={item.urlImage}
                        alt={item.titulo}
                    />
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center">
                        <h2 className="font-bold text-white text-lg md:text-xl">{item.titulo}</h2>
                        <h3 className="font-light text-white text-sm md:text-base">{item.subtitle}</h3>
                    </div>
                </div>
            ))}
        </section>
    );
};
