import Image from "next/image";
import Name from "./name";

interface CardProfileProps {

    user: {
        id: string,
        name: string | null;
        username: string | null;
        bio: string | null;
        image: string | null,
    }
}

export function CardProfile({ user }: CardProfileProps) {

    return (

        <section
            className="w-full flex flex-col items-center mx-auto px-4"
        >
            <div
                className=""
            >
                <Image
                    src={user.image ?? "https://img.freepik.com/vetores-premium/icone-de-perfil-de-avatar_188544-4755.jpg"}
                    alt="Foto de Perfil"
                    height={100}
                    width={100}
                    className="rounded-full bg-gray-50 object-cover border-4 border-white"
                    priority
                    quality={100}
                />
            </div>

            <div

            >
                <Name 
                initialName={user.name ?? "Digite seu nome..."}
                />
            </div>

        </section>

    )
}