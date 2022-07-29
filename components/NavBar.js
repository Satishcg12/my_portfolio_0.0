import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import Logo from '../public/satish.svg'

const hoverNav = 'hover:border-2 border-white rounded-full h-8 w-8 flex justify-center items-center text-white'

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
    }, [route])

    return (
        <>
            <div className=' bg-black fixed w-full md:w-1/12 md:h-screen p-4 flex flex-col md:flex-none items-center'>
                <div className=' rounded text-white flex items-center py-4'>
                    <div className='h-7 w-7 relative ' >
                        <Image layout='fill' src={Logo} alt='logo' />
                    </div>
                    <span className='px-2 md:hidden'>
                        {title}
                    </span>
                </div>
                <div className=' flex md:flex-col justify-evenly text-white w-screen md:w-auto md:h-full'>
                    <span className={hoverNav} title='Home'>
                        <Link href='/'>
                            <a >

                                <i className="fa-solid fa-house text-white"></i>
                            </a>
                        </Link>
                    </span>
                    <span className={hoverNav} title='About'>
                        <Link href='/about'>
                            <a>
                                <i className="fa-solid fa-user text-white"></i>

                            </a>
                        </Link>
                    </span>
                    <span className={hoverNav} title='Projects'>
                        <Link href='/projects'>
                            <a>

                                <i className="fa-solid fa-code"></i>
                            </a>
                        </Link>

                    </span>
                    <span className={hoverNav} title='Achivements'>
                        <Link href='/achivements'>
                            <a>

                                <i className="fa-solid fa-map"></i>
                            </a>
                        </Link>

                    </span>
                    <span className={hoverNav} title='Education'>
                        <Link href='/education'>
                            <a>

                                <i className="fa-solid fa-graduation-cap"></i>
                            </a>
                        </Link>

                    </span>
                    <span className={hoverNav} title='Contact me'>
                        <Link href='/contact'>
                            <a>
                                <i className="fa-solid fa-envelope"></i>

                            </a>
                        </Link>
                    </span>
                </div>
            </div>
        </>

    )
}

export default NavBar