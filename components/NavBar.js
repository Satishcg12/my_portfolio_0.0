import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Logo from '../public/satish.svg'

const hoverNav = 'hover:border border-white rounded-full h-8 w-8 flex justify-center items-center'

const NavBar = () => {
    const [title, setTitle] = useState('')
    const route = useRouter()
    useEffect(() => {
        switch (route.asPath) {
            case '/':
                setTitle('Welcome')
                break;
            case '/about':
                setTitle('About')
                break;
            case '/projects':
                setTitle('Projects')
                break;
            case '/achivements':
                setTitle('Achivements')
                break;
            case '/education':
                setTitle('Educatons')
                break;
            case '/contact':
                setTitle('Contact me')
                break;

            default:
                break;
        }
    }, [route.asPath])

    return (
        <>
        <Head>
            <title>{title}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Head>
            <div className='sticky bg-black w-full md:w-20 md:h-screen  flex flex-col md:flex-none items-center'>
                <div className=' rounded text-white flex items-center py-4'>
                    <div className='h-7 w-7 relative ' >
                        <Image layout='fill' src={Logo} alt='logo' />
                    </div>
                    <span className='px-2 md:hidden'>
                        {title}
                    </span>
                </div>
                <div className=' flex md:flex-col justify-evenly text-white w-screen h-auto md:w-auto md:h-full'>
                    <Link href='/'>
                        <a >
                            <p className={hoverNav} title='Home'>

                                <i className="fa-solid fa-house"></i>
                            </p>
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a>
                            <p className={hoverNav} title='About'>
                                <i className="fa-solid fa-user"></i>
                            </p>

                        </a>
                    </Link>
                    <Link href='/projects'>
                        <a>
                            <p className={hoverNav} title='Projects'>

                                <i className="fa-solid fa-code"></i>
                            </p>
                        </a>
                    </Link>

                    <Link href='/achivements'>
                        <a>
                            <p className={hoverNav} title='Achivements'>

                                <i className="fa-solid fa-map"></i>
                            </p>
                        </a>
                    </Link>

                    <Link href='/education'>
                        <a>
                            <p className={hoverNav} title='Education'>

                                <i className="fa-solid fa-graduation-cap"></i>
                            </p>
                        </a>
                    </Link>

                    <Link href='/contact'>
                        <a>
                            <p className={hoverNav} title='Contact me'>
                                <i className="fa-solid fa-envelope"></i>
                            </p>

                        </a>
                    </Link>
                </div>
            </div>
        </>

    )
}

export default NavBar