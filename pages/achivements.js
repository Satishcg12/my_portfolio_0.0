import axios from "axios";

export default function Achivements({ data }) {
    return (
        <>
            <div>

                {
                    data?.map((item, index) => {
                        return <div key={index} className="flex flex-col md:flex-row  shadow rounded m-10 overflow-hidden border">
                            <div className="bg-black text-white flex items-center justify-center  w-full md:w-20 py-5" >
                                {item.date}
                            </div>
                            <div className="p-4">
                                <h1 className="text-3xl font-bold">{item.title}</h1>
                                <p>{item?.description}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export async function getServerSideProps() {

    const res = await axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=NMzlphfOqKwNRxo7-SpL0Sq_pqRpqnk9TR3Q2vX5_Q9ilVDT4NdlQ56EnsPdic6RRYxDAz1VLlLt8-zKGVYHYJRm8EvFw0-gm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAfzR5dnqg5DbHUmEKvzNvdLNLmnfCOBKeU-nNfu1VouaXCQGsxOowDyGyi-mW25g3w98fsMy1O4FXLx64ZIek1t6JGWgHGcj9z9Jw9Md8uu&lib=MuAPKZ_5f6H4-mw8I0RPoAboTMZKQpYWv');
    const data = res.data
    return {
        props: {
            data: data.data 
        }
    }
}
