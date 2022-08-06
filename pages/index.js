import Image from "next/image";
import Link from "next/link";
import myImage from '../public/images/ME.jpeg'

export default function Home() {

  return (
    <>
      <div className="flex flex-col md:flex-row items-center overflow-x-hidden">
        <div className="w-screen bg-black h-[250px] md:w-1/3 md:h-screen animate-content-appear-t-b md:animate-content-appear-l-r"></div>
        <span className="h-[400px] w-[300px] relative rounded overflow-hidden animate-image md:animate-md-image shadow-[-30px_-33px_rgba(234,234,234)]" >
          <Image layout="fill" src={myImage} alt="image"  placeholder="blur"/>
        </span>
        <div className="mb-14 border-t-2 md:border-t-0 md:border-l-2  pt-4 md:pl-4 font-semibold gap-2 animate-content-appear-b-t md:animate-content-appear-l-r translate-y-full">
          <h1 className="font-bold capitalize text-3xl whitespace-nowrap">Satish Chaudhary</h1>
          <h3 className="font-light">Web Developer</h3>
          <div className="flex justify-between pt-2">
          <Link href='/resume'>
          <a className="rounded-full shadow hover:shadow-lg hover:bg-gray-50  border px-7 py-2">
            Resume
          </a>
          </Link>
          <Link href="/contact">
          <a className="rounded-full shadow hover:shadow-lg hover:bg-gray-50  border px-7 py-2">
            Hire me
          </a>
          </Link>
          </div>
        </div>
      </div>
    </>
  )
}
