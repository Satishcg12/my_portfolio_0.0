import Script from 'next/script'
import NavBar from '../components/NavBar'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
      <div>
        <div className=' md:flex w-screen h-screen overflow-hidden'>
        <NavBar/>
        <div className='overflow-scroll'>

          <Component {...pageProps} />
        </div>
        </div>


      </div>
  )
}

export default MyApp
