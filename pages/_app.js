import Head from 'next/head'
import Link from 'next/link'
import NextNProgress from 'nextjs-progressbar'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

const gitUrl = 'https://github.com/Satishcg12'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>My Personal Website</title>
      </Head>
      <NextNProgress
        color='#395B64'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        options={{ trickleSpeed: 100 }}
      />
      <div className='flex flex-col md:flex-row w-screen h-screen overflow-hidden'>
        <NavBar />
        <div className='overflow-auto w-full'>

          <Component {...pageProps} />
        </div>
      </div>
      <footer>
        <Link href={gitUrl} >
          <a rel='noopener noreferrer' target='_blank' className="text-gray-600 absolute flex items-center bottom-6 right-6 font-bold opacity-50">
            <h4>Powered by </h4>
            <i className="fa-brands fa-github"></i>
          </a>
        </Link>
      </footer>
    </div>
  )
}

export default MyApp
