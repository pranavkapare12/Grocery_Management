import react, { useState, useContext } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { AuthContext } from '../../context/AuthProvider';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';

function FinalOrder() {

    const {user, cart , addToCart , amount , setAmount , orders , setOrders} = useContext(AuthContext);
    // console.log(user)
    const API = import.meta.env.VITE_API_URL;

    const [formdata, setFormdata] = useState({
        name: "",
        number: 0,
        email: "",
        payment: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        product:[],
        total:0

    })

    async function setLocation() {
        try {
            if (!navigator.geolocation) {
                console.log('Geolocation is not supported by your browser');
                return;
            }
            let latitude, longitude;
            let temp;
            cart.map((data) => {data.stock=undefined,data.createdAt=undefined,data.updatedAt=undefined})
            navigator.geolocation.getCurrentPosition(async (position) => {
                let data = position.coords;
                latitude = data.latitude;
                longitude = data.longitude;
                const temp = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`).then(res => res.json()).then((data)=>{
                    data = data.address;
                    setFormdata({...formdata,
                        address: data.county +","+data.state_district+","+data.state+","+data.country+", PINCODE "+ data.postcode,
                        city: data.county,
                        state: data.state,
                        country: data.country,
                        pincode: data.postcode,
                        product: cart,
                        total:amount,
                        customer_id:user._id
                    })
                });
            })

        } catch (error) {
            console.log(error)
        }
    }

    const submitOrder = async () => {

        if(cart.length === 0){
            toast("CART IS EMPTY (ADD SOME PRODUCTS)")
            return;
        }

        if (formdata.name === "" || formdata.address === "" || formdata.number === 0 || formdata.email === "" || formdata.city === "" || formdata.state ==="" || formdata.country === "" || formdata.pincode === ""){
            toast("ALL FIELDS ARE REQUIRED")
            return;
        }

        try {
            let res =await axios.post(`${API}/order/data`,formdata,{withCredentials:true})
            if (res.status === 200){
                toast.success("ORDER PLACE SUCCESSFULLF");
                setOrders([...orders,res.data.ack])
            }else{
                toast.error("FAILED ORDER PLACE SUCCESSFULLF");
            }
            
        } catch (error) {
            toast.error("FAILED ORDER PLACE SUCCESSFULLF");
        }
        setFormdata({})
        addToCart([])
        setAmount(0)
    }
    return (
        <div className=' w-screen h-screen' style={{ fontFamily: "'Inria Sans', sans-serif" }}>
            <Toaster />
            <div className="flex w-full justify-center place-items-center text-2xl font-bold px-2 sm:px-10 md:px-10 lg:px-20 my-3">
                <div className="flex-1 flex flex-col flex-wrap justify-center border p-4">
                    <div className="flex-1 flex justify-center items-center bg-black p-3">
                        <label className="text-white">PLACE YOUR ORDER</label>
                    </div>
                    <div className="flex-1 flex justify-evenly flex-col md:flex-row p-3">
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label className=" text-xs block text-gray-600">
                                your name
                            </label>
                            <input
                                type="text"
                                placeholder='enter your name'
                                className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs"
                                value={formdata.name || ""}
                                onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
                            />
                        </div>
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label className=" text-xs block text-gray-600">
                                your number
                            </label>
                            <input
                                type="text"
                                placeholder='enter number'
                                className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs"
                                value={formdata.number || ""}
                                onChange={(e) => setFormdata({ ...formdata, number: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-evenly flex-col md:flex-row px-3">
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label className=" text-xs block text-gray-600">
                                your email
                            </label>
                            <input
                                type="email"
                                placeholder='enter email'
                                className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs"
                                value={formdata.email || ""}
                                onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
                            />
                        </div>
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label className=" text-xs block text-gray-600">
                                payment method
                            </label>
                            <select className='px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs'
                                value={formdata.payment || ""}
                                onChange={(e) => setFormdata({ ...formdata, payment: e.target.value })}
                            >
                                {
                                    !formdata.payment ? <option value="">select option</option> : ""
                                }
                                <option value="COD">cash on delivery</option>
                                <option value="UPI">UPI</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-evenly flex-col md:flex-row px-3 mt-2">
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label className=" text-xs block text-gray-600">
                                address line 1
                            </label>
                            <input type="text"
                                placeholder='eg : flat number'
                                className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs"
                                value={formdata.address || ""}
                                onChange={(e) => setFormdata({ ...formdata, address: e.target.value })}
                            />
                        </div>
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                        </div>
                    </div>
                    <div className="flex-1 flex justify-evenly flex-col md:flex-row px-3 mt-2">
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label className=" text-xs block text-gray-600">
                                City
                            </label>
                            <input type="text"
                                placeholder='eg : pune'
                                className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs"
                                value={formdata.city || ""}
                                onChange={(e) => setFormdata({ ...formdata, city: e.target.value })}
                            />
                        </div>
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label className=" text-xs block text-gray-600">
                                State
                            </label>
                            <input type="text"
                                placeholder='eg : Maharashtra'
                                className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs"
                                value={formdata.state || ""}
                                onChange={(e) => setFormdata({ ...formdata, state: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-evenly flex-col md:flex-row px-3 mt-2">
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label className=" text-xs block text-gray-600">
                                Country
                            </label>
                            <input type="text"
                                placeholder='eg : india'
                                className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs"
                                value={formdata.country || ""}
                                onChange={(e) => setFormdata({ ...formdata, country: e.target.value })}
                            />
                        </div>
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label className=" text-xs block text-gray-600">
                                Pincode
                            </label>
                            <input type="text"
                                placeholder='eg : 411001'
                                className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs"
                                value={formdata.pincode || ""}
                                onChange={(e) => setFormdata({ ...formdata, pincode: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-evenly flex-col md:flex-row px-3 mt-4">
                        <div className="flex-1 flex justify-center items-center gap-2">
                            {
                                formdata.address === "" || formdata.city ==="" || formdata.country === "" || formdata.pincode === "" || formdata.state === "" ? <button type="button" className='text-xs bg-gray-700 text-white px-10 h-10 rounded-xs active:scale-95' onClick={setLocation}>Take Current Address</button>:""
                            }
                            
                        </div>
                        <div className="flex-1 flex justify-center items-center gap-2">
                            <button type="button" className='text-xs bg-[#53DE53] text-white px-10 h-10 rounded-xs active:scale-95'
                                onClick={submitOrder}
                            >Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default FinalOrder;