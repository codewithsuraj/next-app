import Image from "next/image";

import suraj from "@/public/images/suraj.jpg";

export default async function Home() {
  return (
    <main className="relative h-screen">
      {/* <Image src={suraj} alt="Srk" /> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Srk"
        width={300}
        height={170}
      /> */}

      <Image
        src="https://bit.ly/react-cover"
        alt="Srk"
        fill
        className="object-cover"
        // sizes="100vw"
        sizes="(max-width: 480px) : 100vw, (max-width: 768px) : 50vw, 33vw"
        quality={75}
        priority
      />
    </main>
  );
}
