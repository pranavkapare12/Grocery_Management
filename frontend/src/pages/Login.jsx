import react,{useState} from 'react';
import { Eye ,EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'
import toast,{Toaster} from 'react-hot-toast'
import axios from 'axios'

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [loginData,setLoginData] = useState({
        email:"",
        password:""
    });

    async function onSubmit(){
        if (loginData.email == "" || loginData.password==""){
            toast.error("ALL FIELDS ARE REQUIRED")
            return;
        }

        try {
            const res =await axios.post("http://localhost:3000/auth/login",loginData);
            toast.success("LOGIN SUCCESSFULL");   
        } catch (error) {
            if (error.response)
                toast.error(error.response.data.message);
            else if (error.request)
                console.log("No Response from the Server")
            else
                console.log(error.message)
        }
        setLoginData({
            email:"",
            password:""
        })
    }

    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <Toaster />
            <div className='w-10/12 h-8/12 sm:h-8/12 sm:w-6/12 md:h-8/12 md:w-6/12 lg:h-7/12 lg:w-3/12 border-4 rounded-[5px] p-2 flex flex-col '>
                <div className="basis-50 flex justify-center">
                    <label className='font-bold font-inria text-5xl' style={{ fontFamily: "'Inria Sans', sans-serif" }}>Login</label>
                </div>
                <div className="basis-70 flex flex-col gap-2">
                    <div className=" basis-20  mx-4 my-0.5 flex justify-center items-center ">
                        <input type="text" name="" 
                        className='h-11/12 w-12/12 px-7 outline-0 text-2xl border-4 border-gray-400 rounded-md'
                        placeholder='Enter Name' 
                        value={loginData.email} 
                        onChange={(e) => {setLoginData({...loginData,email:e.target.value})}}
                        />
                    </div>
                    <div className=" basis-20  mx-4 my-0.5 flex justify-center items-center gap-2">
                        <input type={showPassword ? "text" : "password"}
                        name="" 
                        className=' h-11/12 w-12/12 px-7 outline-0 text-2xl border-4 border-gray-400 rounded-md' placeholder='Enter your password' 
                        value={loginData.password}
                        onChange={(e)=>{ setLoginData({...loginData,password : e.target.value}) }}
                        />
                        <div className=" basis-30 border-4 border-gray-400 h-11/12 flex justify-center items-center rounded-md">
                            {showPassword ? <EyeOff className='size-7' onClick={() => setShowPassword(!showPassword)} /> : <Eye className='size-7' onClick={() => setShowPassword(!showPassword)} />}
                        </div>
                    </div>
                    <div className=" basis-20  mx-4 my-0.5 flex justify-center items-center " >
                        <button type="button" 
                        name="" 
                        className=' h-10/12 w-12/12 px-7 bg-[#42D940] text-white font-bold outline-0 text-2xl rounded-md active:scale-98' 
                        placeholder='Enter Name' 
                        onClick={onSubmit}
                        >Login Now</button>
                    </div>
                    <div className=" basis-20  mx-4 my-0.5 flex justify-center items-center ">
                        <button type="button" name="" className=' h-10/12 w-12/12 px-7 bg-[#42D940] text-white font-bold outline-0 text-2xl rounded-md flex justify-center  gap-7 place-items-center  active:scale-98' placeholder='Enter Name' >
                            <img src="/google.png" alt="google img" className='h-10' />
                            <label>Login by Google</label>
                        </button>
                    </div>
                    <div className=" basis-20  mx-4 my-0.5 flex justify-center items-center gap-4 ">
                      <label>Don't have account?</label> <Link to="/signup" className='text-green-500 text-xl'> registor now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;