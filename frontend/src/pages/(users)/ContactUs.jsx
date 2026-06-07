import react from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import { useState } from "react"
import toast,{Toaster} from 'react-hot-toast';
import axios from 'axios';
function ContactUs() {
    const API = import.meta.env.VITE_API_URL;
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phoneno:0,
        description:""
    })

    function submitForm(){
        if(formData.name === "" || formData.email === "" || formData.phoneno === 0 || formData.description === ""){
            toast("All fields are required")
            return;
        }
        try {
            const ack = axios.post(`${API}info/data`,formData,{
                withCredentials:true
            }).then((data)=>{
                toast.success("Data Added Successfully")
            })
            
        } catch (error) {
            console.log(error)
        }finally{
            setFormData({})
        }

    }

    return (
        <div className=' w-screen h-screen'>
            <Toaster />
            <div className="w-full h-full flex flex-col" style={{ fontFamily: "'Inria Sans', sans-serif" }}>
                <div className=" w-full basis-20 flex justify-center place-items-center font-bold text-2xl"><label>GET IN TOUCH</label></div>
                <div className=" w-full  flex justify-center rounded-[5px] ">
                    <div className=' w-11/12 sm:w-11/12 md:w-7/12  lg:w-4/12 border-[3px] border-gray-300 p-4 flex flex-col'>
                        <div className=" w-full p-2 basis-20">
                            <input type="text" 
                            className='w-full h-full bg-gray-200 outline-0 px-4 rounded-[5px]' 
                            placeholder='enter your name'
                            value={formData.name || ""}
                            onChange={(e)=> setFormData({...formData,name:e.target.value})}
                            />
                        </div>
                        <div className=" w-full p-2 basis-20">
                            <input type="email" 
                            className='w-full h-full bg-gray-200 outline-0 px-4 rounded-[5px]' 
                            placeholder='enter your email'
                            value={formData.email || ""}
                            onChange={(e)=> setFormData({...formData,email:e.target.value})}
                            />
                        </div>
                        <div className=" w-full p-2 basis-20">
                            <input type="tel"
                            className='w-full h-full bg-gray-200 outline-0 px-4 rounded-[5px]' 
                            placeholder='enter your number'
                            pattern='[0-9]{10}'
                            value={formData.phoneno || ""}
                            onChange={(e)=>setFormData({...formData, phoneno:Number(e.target.value)})}
                            />
                        </div>
                        <div className=" w-full p-2 basis-60">
                            <textarea 
                            className='w-full h-full bg-gray-200 outline-0 p-4 rounded-[5px]' 
                            placeholder='enter your message'
                            value={formData.description || ""}
                            onChange={(e)=> setFormData({...formData,description:e.target.value})}
                            />
                        </div>
                        <button className=" w-full p-2 basis-18 bg-[#6FE160] my-2 active:scale-95 rounded-[5px]"
                        onClick={submitForm}
                        >
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