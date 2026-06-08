import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Eye, EyeClosed } from "lucide-react"
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import toast,{Toaster} from 'react-hot-toast'
import axios from "axios";

function Landing() {
    const API = import.meta.env.VITE_API_URL;
    const { user, setUser, Db_product, setDbProduct } = useContext(AuthContext);
    const [state, setState] = useState({
        fir_pass: false,
        sec_pass: false
    })

    const [userData, setUserData] = useState({
        email: "",
        fir_pass: "",
        sec_pass: "",
        is_req_pass: false,
    })

    function loginWithGoogle(data) {
        let jwtDate = jwtDecode(data.credential);
        setUserData({ ...userData, email: jwtDate.email })
        let temp = {
            email: jwtDate.email
        }
        const result = axios.post(`${API}/auth/google`, temp, {
            withCredentials: true
        }).then((data) => {
            if (data.data.message === "USER NOT FOUND") {
                setUserData({ ...userData, email: jwtDate.email, is_req_pass: true , username : jwtDate.name || "USER" , type:"Customer"})
            } else if (data.data.message === "USER FOUND") {
                console.log("User Found")
                console.log(data.data.user)
                setUser(data.data.user)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    function error(err) {
        console.log(err)
    }


    function submit() {
        if ( userData.fir_pass === "" || userData.sec_pass === ""){
            toast("ALL FIELDS ARE REQUIRED")
            return;
        }

        if (userData.fir_pass !== userData.sec_pass){
            toast("Ensure both password are equal")
            return;
        }

        const result= axios.post(`${API}auth/google/create`,userData,{
            withCredentials:true
        }).then((data)=>{
            setUser(data.data.user)
        }).catch((err)=>console.log(err)).finally(()=>{
            setUserData({
                email:""
            })
        })
    }

    return (
        <>
        <Toaster />
            <div className="flex justify-center place-items-center w-full h-11/12 bg-[#EFEFEF]">
                <div className="min:w-2/12 w-2/12 bg-white p-4 border-4 rounded-[5px] flex flex-col gap-y-4">
                    <div className=" flex justify-center place-items-center">
                        <label htmlFor="" className=" font-bold text-xl">Google Login</label>
                    </div>
                    <div className="flex justify-center w-full gap-x-4">
                        <GoogleLogin
                            onSuccess={(data) => loginWithGoogle(data)}
                            onError={(err) => error(err)}
                            theme="filled_black"
                            shape="square"
                            className="flex-1"
                        />
                    </div>

                    {
                        userData.email === "" && !userData.is_req_pass ? "" :
                            <>
                                <div className="flex justify-center w-full gap-x-4">
                                    <input
                                        type={state.fir_pass ? "text" : "password"}
                                        placeholder="Password" className=" bg-white border-2 px-4 py-2" 
                                        value={userData.fir_pass || ""}
                                        onChange={(e)=>setUserData({...userData,fir_pass:e.target.value})}
                                        />
                                    <button className=" border-2 px-2 py-2 rounded-[5px]"
                                        onClick={() => setState({ ...state, fir_pass: !state.fir_pass })}
                                    >
                                        {
                                            state.fir_pass ? <EyeClosed size={20} /> : <Eye size={20} />
                                        }
                                    </button>
                                </div>
                                <div className="flex justify-center w-full gap-x-4">
                                    <input
                                        type={state.sec_pass ? "text" : "password"}
                                        placeholder="Conform Password"
                                        className=" bg-white border-2 px-4 py-2"
                                        value={userData.sec_pass || ""}
                                        onChange={(e) => setUserData({...userData,sec_pass:e.target.value})}
                                        />
                                    <button className=" border-2 px-2 py-2 rounded-[5px]"
                                        onClick={() => setState({ ...state, sec_pass: !state.sec_pass })}
                                    >
                                        {
                                            state.sec_pass ? <EyeClosed size={20} /> : <Eye size={20} />
                                        }
                                    </button>
                                </div>
                                <div className="flex justify-center w-full gap-x-4">
                                    <button className=" border-2 px-5 py-2 bg-black rounded-xl"
                                        onClick={submit}
                                    >
                                        <label htmlFor="" className=" text-white font-semibold">Continue</label>
                                    </button>
                                </div>
                            </>
                    }

                </div>
            </div>
        </>
    )
}

export default Landing;