import react from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
function ContactUs() {
    return (
        <div className=' w-screen h-screen'>
            <Navbar />
            <div className="w-full h-full flex flex-col" style={{ fontFamily: "'Inria Sans', sans-serif" }}>
                <div className=" w-full basis-20 flex justify-center place-items-center font-bold text-2xl"><label>GET IN TOUCH</label></div>
                <div className=" w-full  flex justify-center rounded-[5px] ">
                    <div className=' w-11/12 sm:w-11/12 md:w-7/12  lg:w-4/12 border-[3px] border-gray-300 p-4 flex flex-col'>
                        <div className=" w-full p-2 basis-20">
                            <input type="text" name="" className='w-full h-full bg-gray-200 outline-0 px-4 rounded-[5px]' placeholder='enter your name' />
                        </div>
                        <div className=" w-full p-2 basis-20">
                            <input type="text" name="" className='w-full h-full bg-gray-200 outline-0 px-4 rounded-[5px]' placeholder='enter your email' />
                        </div>
                        <div className=" w-full p-2 basis-20">
                            <input type="number" name="" className='w-full h-full bg-gray-200 outline-0 px-4 rounded-[5px]' placeholder='enter your number' />
                        </div>
                        <div className=" w-full p-2 basis-60">
                            <textarea className='w-full h-full bg-gray-200 outline-0 p-4 rounded-[5px]' placeholder='enter your message'/>
                        </div>
                        <button className=" w-full p-2 basis-18 bg-[#6FE160] my-2 active:scale-95 rounded-[5px] ">
                            <label className='w-full h-full  rounded-[5px]' placeholder='enter message' > Send Message </label>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ContactUs;