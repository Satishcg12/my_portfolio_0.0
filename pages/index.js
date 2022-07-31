import Head from "next/head";
import Image from "next/image";
import myImage from '../public/ME.jpeg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-screen bg-black h-[250px] md:w-1/3 md:h-screen"></div>
        <span className="h-[400px] w-[300px] relative -translate-y-1/2 animate-image-appear md:animate-md-image-appear shadow-[-30px_-33px_rgba(234,234,234)]">
          <Image layout="fill" src={myImage} alt="image" loading="eager" placeholder="blur"/>
        </span>
        <div className="-translate-y-full md:translate-y-0 border-t-2 md:border-t-0 md:border-l-2 border-black pt-4 md:pl-4 font-semibold gap-2">
          <h1 className="font-bold capitalize text-3xl whitespace-nowrap">Satish Chaudhary</h1>
          <h3 className="font-light">Fulstack Developer</h3>
          <div className="flex justify-between pt-2">

          <button className="border-black border px-7 py-2">
            Resume
          </button>
          <button className="border-black border px-7 py-2">
            Hire me
          </button>
          </div>
          
        </div>
      </div>
    </>
  )
}
