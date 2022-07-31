import Head from 'next/head'
import Script from 'next/script'
import NavBar from '../components/NavBar'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
      <div>
        <Head>
        <title>My Personal Website</title>
        </Head>
        <div className='flex flex-col md:flex-row w-screen h-screen overflow-hidden'>
        <NavBar/>
        <div className='overflow-auto w-full'>

          <Component {...pageProps} />
        </div>
        </div>

        <Script src='/sw.js' />
      </div>
  )
}

export default MyApp
