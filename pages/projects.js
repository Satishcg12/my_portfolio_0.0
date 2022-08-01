import Image from "next/image"
import Link from "next/link"

export default function Projects({ data }) {
    return (
        <>
            <h1 className="text-4xl font-semibold text-center my-10">My Projects</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-10">

                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="border p-10 rounded shadow-lg relative" >
                                <h3 className="font-bold">
                                    {item.name}
                                </h3>
                                <div className="overflow-clip font-light text-sm ">

                                    { item.topics.length <= 0 ? <div >No topics</div> :
                                     item.topics.map((topic, index) => {
                                        return (
                                            <span key={index} className="rounded-full px-1 mr-1 border border-gray-500">
                                                {topic}
                                            </span>
                                        )
                                    })
                                    
                                    }
                                </div>
                                <p className="font-extralight py-4 capitalize">
                                    {item.description || "No description"}
                                </p>
                                <Link href={item.html_url}>
                                    <a rel='noopener noreferrer' target='_blank' className="absolute top-4 right-4 border rounded-lg  px-2 bg-gray-800 text-white">
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.github.com/user/repos`, {
        headers: {
            "Authorization": `token ${process.env.GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github.v3+json'
        }
    })
    const data = await res.json()

    return { props: { data } }
}