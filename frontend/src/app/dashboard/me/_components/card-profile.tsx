import Image from "next/image";
import Name from "./name";

interface CardProfileProps {

    user: {
        id: string,
        name: string | null,
        username: string | null,
        bio: string | null,
        image: string | null
    }
}

function CardProfile({ user }: CardProfileProps) {

    return (

        <>

            <section className="w-full flex flex-col items-center mx-auto px-4">

                <div className="">
                    <Image
                        src={user.image ?? "https://avatars.githubusercontent.com/u/142186594?v=4"}
                        alt="Foto de Perfil"
                        width={100}
                        height={100}
                        className="rounded-xl bg-gray-50 object-cover border-4 border-white hover:shadow-xl duration-300 transition-all"
                        priority
                        quality={100}
                    />
                </div>

                <div className="">
                    <Name
                        initialName={user.name ?? "Digite seu nome"}
                    />
                </div>

            </section>
        </>
    );
}

export default CardProfile;