import Head from 'next/head'
import { useRouter } from 'next/router'
import NavBox from '../components/NavBox'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <div style={{display:'flex' , width:"100vw"}}>
      
      <NavBox/>
      <div style={{width:'50vw', background:'rgb(71, 71, 71)', color:"white"}}>

      <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
