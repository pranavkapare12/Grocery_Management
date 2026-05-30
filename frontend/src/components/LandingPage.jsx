import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Eye, EyeClosed } from "lucide-react"
import { useState } from "react";


function Landing() {

    const [state, setState] = useState({
        fir_pass: false,
        sec_pass: false
    })

    const [userData, setUserDate] = useState({
        email: "",
        fir_pass: "",
        sec_pass: ""
    })


    function loginWithGoogle(data) {
        console.log(jwtDecode(data.credential))
    }

    function error(err) {
        console.log(err)
    }

    return (
        <>
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
                        userData.email === "" ? "" :
                            <>
                                <div className="flex justify-center w-full gap-x-4">
                                    <input
                                        type={state.fir_pass ? "text" : "password"}
                                        placeholder="Password" className=" bg-white border-2 px-4 py-2" />
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
                                        className=" bg-white border-2 px-4 py-2" />
                                    <button className=" border-2 px-2 py-2 rounded-[5px]"
                                        onClick={() => setState({ ...state, sec_pass: !state.sec_pass })}
                                    >
                                        {
                                            state.sec_pass ? <EyeClosed size={20} /> : <Eye size={20} />
                                        }
                                    </button>
                                </div>
                                <div className="flex justify-center w-full gap-x-4">
                                    <button className=" border-2 px-5 py-2 bg-black rounded-xl">
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