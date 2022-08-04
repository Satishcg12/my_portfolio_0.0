import axios from "axios";
import { useState } from "react";

export default function Contact() {
    const [loading , setLoading] = useState(false);
    const [success , setSuccess] = useState(false);
    const [error , setError] = useState(false);

    const handelSubmit = (e) => {
        e.preventDefault();
        
        const {name , email, message}= e.target;
        const data = {
            name: name.value,
            email: email.value,
            message: message.value
        }
        setLoading(true);
        axios.post("/api/mail", data)
        .then(res => {
            res.status === 200 ? setSuccess(true) : setError(true);
            e.clear();
            setLoading(false);
            setTimeout(() => {
                setSuccess(false);
                setError(false);
            }, 2000);
        }
        )
        .catch(err => {
            setLoading(false);
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
        }
        )

    }


    return ( 

        <>
            <div className="grid grid-cols-1 md:grid-cols-2 h-full ">
                <div className="text-3xl py-14 w-full bg-black text-white text-center ">
                    <h1 className="  ">
                        
                        Contact me
                        </h1>
                        </div>

                <form className="p-14" onSubmit={handelSubmit}>
                    <div className="py-2 ">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="border-b border-gray-500 outline-none w-full bg-none" id="name" name='name' required />
                    </div>
                    <div className="py-2">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="border-b border-gray-500 outline-none w-full bg-none" id="email" name="email" required />
                    </div>
                    <div className="py-2">
                        <label htmlFor="message">Message <span className="text-sm font-extralight right-0">12/500</span></label>
                        <textarea className="border border-gray-500 outline-none w-full bg-none" id="message" rows="3" name='message' required ></textarea>
                    </div>
                    <button type="submit" className="border rounded shadow-lg w-full p-1 bg-black text-white">Submit</button>
                {loading && <div className="text-center">sending
                ...</div>}
                {success && <div className="text-center">Success</div>}
                {error && <div className="text-center">Error</div>}
                </form>

            </div>
        </>
    )
}