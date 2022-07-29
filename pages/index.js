import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Head>
      <title>Welcome</title>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
    <div className="h-[400px] w-[300px] relative">

      <Image layout="fill" src='/ME.jpeg' alt="image"/> 
    </div>
    </>
  )
}
