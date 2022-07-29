import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Head>
      <title>Welcome</title>
    </Head>
    <div className="flex flex-col md:flex-row items-center">
    <div className="w-screen bg-black h-[300px] md:w-1/3 md:h-screen" ></div>
    <div className="h-[400px] w-[300px] relative animate-image-appear md:animate-md-image-appear shadow-[-30px_-33px_rgba(234,234,234)]">

      <Image layout="fill" src='/ME.jpeg' alt="image"/> 
    </div>
    </div>
    </>
  )
}
