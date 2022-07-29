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
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js" integrity="sha512-8pHNiqTlsrRjVD4A/3va++W1sMbUHwWxxRPWNyVlql3T+Hgfd81Qc6FC5WMXDC+tSauxxzp1tgiAvSKFu1qIlA==" crossorigin="anonymous" referrerpolicy="no-referrer" />


      </div>
  )
}

export default MyApp
