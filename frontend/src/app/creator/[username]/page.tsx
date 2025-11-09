import Image from "next/image";

export default async function Apoia({

  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params;

  console.log(username);

  return (

    <div>
      Em andamento...
    </div>
  )
}