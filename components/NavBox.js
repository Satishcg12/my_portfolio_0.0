import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import style from '../styles/NavBox.module.css'


const NavBox = () => {
    const [title, setTitle] = useState('welcome')
    const route = useRouter()
    const [animate, setAnimate] = useState(false)

    const handleStart =()=>{
        setAnimate(true)
    }
    const handleEnd =()=>{
        setAnimate(false)
    }

    useEffect(() => {
        route.events.on('routeChangeStart', handleStart)
        route.events.on('routeChangeComplete', handleEnd)
        switch (route.pathname) {
            case '/':
                setTitle('WELCOME')
                break;
            case '/about':
                setTitle('ABOUT')
                break;
            case '/contact':
                setTitle('CONTACT')
                break;

            default:
                break;
        }
    }, [route])

    return (
        <div className={style.main}>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={style.title}>
                <h1>
                    {title}
                </h1>
            </div>
            <nav className={style.nav}>
                <ul>
                    <Link href='/' passHref>
                        <li>
                            <a>Home</a>
                        </li>
                    </Link>
                    <Link href='/about' passHref>
                        <li>
                            <a>About</a>
                        </li>
                    </Link>
                    <Link href='/contact' passHref>
                        <li>
                            <a>Contact</a>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBox