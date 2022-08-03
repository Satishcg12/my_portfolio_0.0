//About page

const after = `after:content-[''] after:p-3 after:bg-black after:absolute after:-right-3 after:-bottom-3 after:animate-spining-b-a `
const before = `before:content-[''] before:p-4 before:bg-black before:absolute before:-top-4 before:-left-4 before:animate-spining-b-a `

export default function About() {
    return(
        <>
        <div className="flex justify-around items-center h-auto md:h-full md:p-20  p-14">
            <div className={`animate-about text-center border-2 border-dashed border-gray-400 relative p-10 md:p-24  ${after} ${before} `}>
                <h1 className="text-3xl font-bold">About</h1>
                <p className="tracking-wide">
                    I&lsquo;m a web developer with a passion for building beautiful, responsive websites. 
                    I have a background in business and a passion for learning new technologies.
                    I have built personal websites, ecommerce websites, and Wordpress websites.
                    I have used React, Next.js, TailwindCSS and MongoDB to build my websites.
                    My current goal is to become a full stack developer.
                </p>
            </div>
        </div>
        </>
    )
}