import react from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getLocation } from '../CurrenetLocation/cu';
function FinalOrder() {

    const submitOrder = () => {
        alert('order placed successfully');
    }
    return (
        <div className=' w-screen h-screen' style={{ fontFamily: "'Inria Sans', sans-serif" }}>
            <Navbar />
            <div className="flex w-full justify-center place-items-center text-2xl font-bold px-2 sm:px-10 md:px-10 lg:px-20 my-3">
                <div className="flex-1 flex flex-col flex-wrap justify-center border p-4">
                    <div className="flex-1 flex justify-center items-center bg-black p-3">
                        <label htmlFor="" className="text-white">PLACE YOUR ORDER</label>
                    </div>
                    <div className="flex-1 flex justify-evenly flex-col md:flex-row p-3">
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label htmlFor="" className=" text-xs block text-gray-600">
                                your name
                            </label>
                            <input type="text" placeholder='enter your name' className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs" />
                        </div>
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label htmlFor="" className=" text-xs block text-gray-600">
                                your number
                            </label>
                            <input type="text" placeholder='enter number' className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs" />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-evenly flex-col md:flex-row px-3">
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label htmlFor="" className=" text-xs block text-gray-600">
                                your email
                            </label>
                            <input type="text" placeholder='enter your name' className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs" />
                        </div>
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label htmlFor="" className=" text-xs block text-gray-600">
                                payment method
                            </label>
                            <select className='px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs'>
                                <option value="COD">cash on delivery</option>
                                <option value="UPI">UPI</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-evenly flex-col md:flex-row px-3 mt-2">
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label htmlFor="" className=" text-xs block text-gray-600">
                                address line 1
                            </label>
                            <input type="text" placeholder='eg : flat number' className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs" />
                        </div>
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label htmlFor="" className=" text-xs block text-gray-600">
                                address line 2
                            </label>
                            <input type="text" placeholder='eg : street number' className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs" />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-evenly flex-col md:flex-row px-3 mt-2">
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label htmlFor="" className=" text-xs block text-gray-600">
                                City
                            </label>
                            <input type="text" placeholder='eg : pune' className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs" />
                        </div>
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label htmlFor="" className=" text-xs block text-gray-600">
                                State
                            </label>
                            <input type="text" placeholder='eg : Maharashtra' className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs" />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-evenly flex-col md:flex-row px-3 mt-2">
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label htmlFor="" className=" text-xs block text-gray-600">
                                Country
                            </label>
                            <input type="text" placeholder='eg : india' className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs" />
                        </div>
                        <div className=" flex-1 flex flex-col flex-wrap gap-2">
                            <label htmlFor="" className=" text-xs block text-gray-600">
                                Pincode
                            </label>
                            <input type="text" placeholder='eg : 411028' className=" px-4 py-2 text-sm w-11/12 outline-0 border rounded-xs" />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-evenly flex-col md:flex-row px-3 mt-4">
                        <div className="flex-1 flex justify-center items-center gap-2">
                            <button type="button" className='text-xs bg-gray-700 text-white px-10 h-10 rounded-xs active:scale-95' onClick={() => getLocation()}>Take Current Address</button>
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