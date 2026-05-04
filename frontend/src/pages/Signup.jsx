import react, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom';
function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className='w-10/12 h-9/12 sm:h-8/12 sm:w-6/12 md:h-8/12 md:w-6/12 lg:h-8/12 lg:w-3/12 border-4 rounded-[5px] p-2 flex flex-col '>
                <div className="basis-18 flex justify-center my-4">
                    <label className='font-bold font-inria text-5xl' style={{ fontFamily: "'Inria Sans', sans-serif" }}> Registartion </label>
                </div>
                <div className="basis-70 flex flex-col gap-2">
                    <div className=" basis-19  mx-4 my-0.5 flex justify-center items-center ">
                        <input type="text" name="" className=' h-11/12 w-12/12 px-7 outline-0 text-2xl border-4 border-gray-400 rounded-md' placeholder='enter name' />
                    </div>
                    <div className=" basis-19  mx-4 my-0.5 flex justify-center items-center ">
                        <input type="text" name="" className=' h-11/12 w-12/12 px-7 outline-0 text-2xl border-4 border-gray-400 rounded-md' placeholder='enter email' />
                    </div>
                    <div className=" basis-19  mx-4 my-0.5 flex justify-center items-center gap-2">
                        <input type={showPassword ? "text" : "password"} name="" className=' h-11/12 w-12/12 px-7 outline-0 text-2xl border-4 border-gray-400 rounded-md' placeholder='Enter your password' />
                        <div className=" basis-30 border-4 border-gray-400 h-11/12 flex justify-center items-center rounded-md" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff className='size-7' /> : <Eye className='size-7' />}
                        </div>
                    </div>
                    <div className=" basis-19  mx-4 my-0.5 flex justify-center items-center gap-2">
                        <input type={showPassword1 ? "text" : "password"} name="" className=' h-11/12 w-12/12 px-7 outline-0 text-2xl border-4 border-gray-400 rounded-md' placeholder='Enter your password' />
                        <div className=" basis-30 border-4 border-gray-400 h-11/12 flex justify-center items-center rounded-md" onClick={() => setShowPassword1(!showPassword1)}>
                            {showPassword1 ? <EyeOff className='size-7' /> : <Eye className='size-7' />}
                        </div>
                    </div>
                    <div className=" basis-18  mx-4 my-0.5 flex justify-center items-center ">
                        <input type="file" name="" className='h-11/12 w-12/12 outline-0 border-4 py-4 px-2 border-gray-400 rounded-md' />
                    </div>
                    <div className=" basis-15  mx-4 my-0.5 flex justify-center items-center gap-3">
                        <button type="button" name="" className=' h-10/12 w-12/12 px-7 bg-[#42D940] text-white font-bold outline-0 text-lg rounded-md active:scale-98' placeholder='Enter Name' >Register now</button>
                        <button type="button" name="" className=' h-10/12 w-12/12 px-7 bg-[#42D940] text-white font-bold outline-0 text-sm rounded-md active:scale-98' placeholder='Enter Name' >Sign up by Google</button>
                    </div>
                    <div className=" basis-10  mx-4 my-0.5 flex justify-center items-center gap-4 ">
                        <label>already have an account</label> <Link to="/login" className='text-green-500 text-xl'> sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;