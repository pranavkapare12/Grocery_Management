import react from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function orderTemplate(props) {
    var classlg = 'lg:w-11/12 bg-amber-300'

    return (
        <div className="lg:w-[50%] md:px-10 lg:px-30 flex justify-center">
            <div className="flex flex-col gap-y-2.5 bg-[#D9D9D9] w-full px-2 lg:px-4 py-2 rounded-xs">
                <div className="flex justify-center place-items-center w-full ">
                    <label className=' font-bold'>ORDER</label>
                </div>
                <div className="flex flex-row border w-full bg-white ">
                    <label className=' flex-2 border-y-0 border-l-0 border p-2 rounded-r-[5px]'>NAME</label>
                    <label className=' flex-8 p-2'>Pranav Kapare</label>
                </div>
                <div className="flex flex-row border w-full bg-white ">
                    <label className=' flex-2 border-y-0 border-l-0 border p-2 rounded-r-[5px]'>EMAIL</label>
                    <label className=' flex-8 p-2'>PranavKapare12345@gmail.com</label>
                </div>
                <div className="flex flex-row border w-full bg-white ">
                    <label className=' flex-2 border-y-0 border-l-0 border p-2 rounded-r-[5px]'>METHOD</label>
                    <label className=' flex-8 p-2'>UPI</label>
                </div>
                <div className="flex flex-row border w-full bg-white ">
                    <label className=' flex-2 border-y-0 border-l-0 border p-2 rounded-r-[5px]'>ADDRESS</label>
                    <label className=' flex-8 p-2'>Hadapsar , Godhalenagar</label>
                </div>
                <div className="flex flex-row border w-full bg-white ">
                    <label className=' flex-2 border-y-0 border-l-0 border p-2 rounded-r-[5px]'>PHONE NO</label>
                    <label className=' flex-8 p-2'>9156027419</label>
                </div>
                <div className="flex flex-row border w-full bg-white ">
                    <label className=' flex-2 border-y-0 border-l-0 border p-2 rounded-r-[5px]'>CITY</label>
                    <label className=' flex-8 p-2'>PUNE</label>
                </div>
                <div className="flex flex-row border w-full bg-white ">
                    <label className=' flex-2 border-y-0 border-l-0 border p-2 rounded-r-[5px]'>COUNTYR</label>
                    <label className=' flex-8 p-2'>INDIA</label>
                </div>
                <div className="flex flex-row border w-full bg-white ">
                    <label className=' flex-2 border-y-0 border-l-0 border p-2 rounded-r-[5px]'>STATE</label>
                    <label className=' flex-8 p-2'>MAHARASHTRA</label>
                </div>
                <div className="flex flex-row border w-full bg-white ">
                    <label className=' flex-2 border-y-0 border-l-0 border p-2 rounded-r-[5px]'>PINCODE</label>
                    <label className=' flex-8 p-2'>411028</label>
                </div>
            </div>
        </div>
    )
}

function Orders() {
    return (
        <div className=' w-screen h-screen' style={{ fontFamily: "'Inria Sans', sans-serif" }}>
            <Navbar />
            <div className=' w-full mt-5 flex justify-center place-items-center'>
                <label className='text-2xl font-bold'>Orders Page</label>
            </div>
            <div className="flex flex-wrap w-full gap-y-2.5 justify-center place-items-center">
                {orderTemplate("")}
                {orderTemplate("")}
                {orderTemplate("")}
                {orderTemplate("")}
                {orderTemplate("")}

            </div>
            <Footer />
        </div>
    )
}
export default Orders;