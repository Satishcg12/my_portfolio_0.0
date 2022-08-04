import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState({ name: "", email: "", message: "" });

    const disablePaste = (e) => {
        e.preventDefault();
        return false;
    }
    const handleChange = e => {
        if ( e.target.name === "message" && e.target.value.length > 500 ) {
            return;
        }
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handelSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = e.target;
        const data = {
            name: name.value,
            email: email.value,
            message: message.value
        }
        setLoading(true);
        axios.post("/api/mail", data)
            .then(res => {
                res.status === 200 ? setSuccess(true) : setError(true);
                res.status === 200 && setData({ name: "", email: "", message: "" });
                res.status !== 200 ? setSuccess(false) : setError(false);
                setLoading(false);
                setTimeout(() => {
                    setSuccess(false);
                    setError(false);
                }, 2000);
            })
    }


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 h-full  ">
                <div className="text-3xl py-14 md:h-screen h-[20vh] w-full bg-black text-white text-center flex md:items-center justify-center ">
                    <h1>

                        Contact me
                    </h1>
                </div>

                <div className="flex flex-col items-center justify-center md:overflow-auto">

                <form className="m-14 p-7 rounded-lg bg-gray-100  shadow-lg" onSubmit={handelSubmit}>
                    <div className="py-2 ">
                        <label htmlFor="name">Name</label>
                        <input autoComplete="off" type="text" className="border-b border-gray-500 outline-none w-full bg-transparent" id="name" name='name' required value={data.name} onChange={handleChange} />
                    </div>
                    <div className="py-2">
                        <label htmlFor="email">Email address</label>
                        <input autoComplete="off" type="email" className="border-b border-gray-500 outline-none w-full bg-transparent" id="email" name="email" required value={data.email} onChange={handleChange} />
                    </div>
                    <div className="py-2">
                        <label htmlFor="message">Message <span className="text-sm font-extralight right-0">{data.message.length}/500</span></label>
                        <textarea className="border border-gray-500 outline-none w-full bg-transparent" id="message" rows="3" name='message' required value={data.message} onChange={handleChange} onPaste={disablePaste} />
                    </div>
                    <button type="submit" className="border relative rounded shadow-lg w-full p-1 bg-black text-white">
                        Submit
                        <span className={`absolute right-0 bottom-0 h-full px-2 p-1 ${success && 'bg-green-500'} ${error && 'bg-red-500'}`}>


                            {loading ? <i className="fas fa-spinner fa-spin ml-2"></i> : null}
                            {success ? <i className="fas fa-check ml-2"></i> : null}
                            {error ? <i className="fas fa-times ml-2"></i> : null}
                        </span>
                    </button>
                </form>
                    <div className="m-3 mb-10 text-lg bg-black border border-black rounded-full px-3 shadow-lg">
                        <Link href='https://www.linkedin.com/in/satish-chaudhary-65224b241/'>
                        <a className="p-2 text-white" rel='noopener noreferrer' target='_blank'>
                        <i className='fa-brands fa-linkedin-in '></i>
                        </a>
                        </Link>
                        <Link href='https://github.com/Satishcg12' >
                        <a className="p-2 text-white" rel='noopener noreferrer' target='_blank'>
                        <i className='fa-brands fa-github'></i>
                        </a>
                        </Link>
                        <Link href='https://www.facebook.com/satish5.chaudhary'>
                        <a className="p-2 text-white" rel='noopener noreferrer' target='_blank'>
                        <i className='fa-brands fa-facebook-f'></i>
                        </a>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}