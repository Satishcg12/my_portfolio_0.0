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
    }, [route.asPath])

    return (
        <>
            <div className='sticky bg-black w-full md:w-20 md:h-screen p-4 flex flex-col md:flex-none items-center'>
                <div className=' rounded text-white flex items-center py-4'>
                    <div className='h-7 w-7 relative ' >
                        <Image layout='fill' src={Logo} alt='logo' />
                    </div>
                    <span className='px-2 md:hidden'>
                        {title}
                    </span>
                </div>
                <div className=' flex md:flex-col justify-evenly text-white w-screen md:w-auto md:h-full'>
                        <Link href='/'>
                            <a >
                    <span className={hoverNav} title='Home'>

                                <i className="fa-solid fa-house text-white"></i>
                    </span>
                            </a>
                        </Link>
                        <Link href='/about'>
                            <a>
                    <span className={hoverNav} title='About'>
                                <i className="fa-solid fa-user text-white"></i>
                    </span>

                            </a>
                        </Link>
                        <Link href='/projects'>
                            <a>
                    <span className={hoverNav} title='Projects'>

                                <i className="fa-solid fa-code"></i>
                    </span>
                            </a>
                        </Link>

                        <Link href='/achivements'>
                            <a>
                    <span className={hoverNav} title='Achivements'>

                                <i className="fa-solid fa-map"></i>
                    </span>
                            </a>
                        </Link>

                        <Link href='/education'>
                            <a>
                    <span className={hoverNav} title='Education'>

                                <i className="fa-solid fa-graduation-cap"></i>
                    </span>
                            </a>
                        </Link>

                        <Link href='/contact'>
                            <a>
                    <span className={hoverNav} title='Contact me'>
                                <i className="fa-solid fa-envelope"></i>
                    </span>

                            </a>
                        </Link>
                </div>
            </div>
        </>

    )
}

export default NavBar