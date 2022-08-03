import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Logo from '../public/logo.png'


const items = [
    {
        name: 'Home',
        icon: 'fa-solid fa-house',
        href: '/'
    },
    {
        name: 'About',
        icon: 'fa-solid fa-user',
        href: '/about'
    },
    {
        name: 'Projects',
        icon: 'fa-solid fa-code',
        href: '/projects'
    },
    {
        name: 'Achivements',
        icon: 'fa-solid fa-map',
        href: '/achivements'
    },
    {
        name: 'Education',
        icon: 'fa-solid fa-graduation-cap',
        href: '/education'
    },
    {
        name: 'Contact',
        icon: 'fa-solid fa-envelope',
        href: '/contact'
    }
    
]


const NavItem = (props) => {
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        if (router.pathname === props.href) {
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }   , [router.pathname, props.href])
    const { href, name, icon } = props
    
    return (
        <>
            <Link href={href} passHref shallow={true}>
                <a >
                    <span className={`hover:border border-white rounded-full h-8 w-8 flex justify-center items-center ${isActive?"border":""}`} title={name}>

                        <i className={icon}></i>
                    </span>
                </a>
            </Link>
        </>
    )

}

const NavBar = () => {

    return (
        <>
            <div className='sticky bg-black w-full md:w-20 md:h-screen p-4 flex flex-col md:flex-none items-center'>
                <div className=' rounded text-white flex items-center py-4'>
                    <div className='h-7 w-7 relative ' >
                        <Image layout='fill' src={Logo} alt='logo' priority='true'/>
                    </div>
                    <span className='px-2 md:hidden'>
                        {/* {title} */}
                    </span>
                </div>
                <div className=' flex md:flex-col justify-evenly text-white w-screen h-auto md:w-auto md:h-full'>
                    {
                        items.map((item, index) => {
                            return (
                                <NavItem key={index} name={item.name} icon={item.icon} href={item.href} />
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default NavBar