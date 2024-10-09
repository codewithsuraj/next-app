import Image from "next/image";

import suraj from "@/public/images/suraj.jpg";
import { Metadata } from "next";

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

      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Srk"
        fill
        className="object-cover"
        // sizes="100vw"
        sizes="(max-width: 480px) : 100vw, (max-width: 768px) : 50vw, 33vw"
        quality={75}
        priority
      /> */}

      <h1>Hello World</h1>
    </main>
  );
}

// export const metadata: Metadata = {
//   title: "...",
//   description: "...",
//   openGraph: {
//     title: "...",
//     description: "...",
//   },
// };

export async function generateMetadata(): Promise<Metadata> {
  const product = fetch("");

  return {
    title: "product.title",
    description: "product.description",
  };
}
