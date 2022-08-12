import axios from "axios"
import Link from "next/link"

const token = process.env.GITHUB_TOKEN
export default function Projects({ data }) {
    return (
        <>
        
            <h1 className="text-4xl font-semibold text-center my-10 animate-content-appear-t-b">My Projects</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-10">

                {data?.map((item, index) => {
                    return (
                    
                        <div key={index} className="border p-10 rounded shadow hover:shadow-lg hover:bg-gray-50 relative animate-content-appear-b-t" >
                            <h3 className="font-bold">
                                {item.name}
                            </h3>
                            <div className="overflow-clip font-light text-sm ">

                                {item.topics.length <= 0 ? <div >No topics</div> :
                                    item.topics.map((topic, index) => {
                                        return (
                                            <span key={index} className="rounded-full px-1 mr-1 border border-gray-500 shadow-sm">
                                                {topic}
                                            </span>
                                        )
                                    })

                                }
                            </div>
                            <p className="font-extralight py-4 ">
                                {item.description?.slice(0,50) || "No description"}
                            </p>
                            {item.visibility === "public" ?
                                <Link href={item.html_url} passHref>
                                    <a rel='noopener noreferrer' target='_blank' className={`absolute flex justify-center items-center top-4 right-4 border rounded-full shadow h-8 w-8 bg-gray-800 text-white hover:bg-gray-700`}>
                                        <i className="fa-solid fa-link "></i>
                                    </a>
                                </Link>
                                :
                                <span className="absolute flex justify-center items-center top-4 right-4 border rounded-full shadow h-8 w-8 bg-red-600 text-white">
                                    <i className="fa-solid fa-link-slash"></i>
                                </span>
                            }
                            {
                                item?.homepage !== '' && item?.homepage !== null && item?.homepage !== undefined ?
                                    <Link href={`${item.homepage?.slice(0,5)!=='https'?'https://':'' }${item.homepage}`}>
                                        <a  target='_blank' rel="noreferrer" className={`bg-gray-800 text-white px-2 p-1 rounded-full shadow-lg`}>
                                            demo
                                        </a>
                                    </Link>
                                    :
                                    <span className="line-through bg-gray-800 text-white px-2 p-1 rounded-full shadow-lg cursor-not-allowed">
                                        demo
                                    </span>

                            }
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

    const res = await axios.get(`https://api.github.com/user/repos`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const data = res.data

    return { props: { data } }
}