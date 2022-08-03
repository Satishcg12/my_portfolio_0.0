export default function Contact() {
    return ( 
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 h-full ">
                <div className="text-3xl py-14 w-full bg-black text-white text-center ">
                    <h1 className=" ">
                        
                        Contact me
                        </h1>
                        </div>

                <form className="p-14">
                    <div className="py-2 ">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="border-b border-gray-500 outline-none w-full bg-none" id="name" />
                    </div>
                    <div className="py-2">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="border-b border-gray-500 outline-none w-full bg-none" id="email" />
                    </div>
                    <div className="py-2">
                        <label htmlFor="message">Message <span className="text-sm font-extralight right-0">12/500</span></label>
                        <textarea className="border border-gray-500 outline-none w-full bg-none" id="message" rows="3"></textarea>
                    </div>
                    <button type="submit" className="border rounded shadow-lg w-full p-1 bg-black text-white">Submit</button>
                </form>

            </div>
        </>
    )
}