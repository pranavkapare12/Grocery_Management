import react from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import WishListCard from '../../components/WishListCard';
function Wishlist() {
    return (
        <div className=' w-screen h-screen' style={{ fontFamily: "'Inria Sans', sans-serif" }}>
            <Navbar />
            <div className='w-full flex items-center justify-center my-5'><label className='text-2xl font-semibold'>PRODUCTS ADDED</label></div>
            <div className="flex flex-row flex-wrap justify-center gap-x-10 gap-y-5 w-full h-auto overflow-scroll px-10">
                <WishListCard />
            </div>
            <div className='w-full h-2/12 flex justify-center mt-8'>
                <div className=" h-full w-8/12 sm:w-3/5 md:w-2/5 lg:w-2/12 flex flex-col border py-3 px-10 gap-2">
                    <div className="w-full flex-1 flex justify-center items-center">
                        <label className="text-xl font-semibold">GREAND TOTAL :: 3000 RS</label>
                    </div>
                    <div className="w-full flex-1 ">
                        <button className="w-full h-full bg-[#EDC70D] text-white active:scale-95 rounded-[5px]">Continue Shopping</button>
                    </div>
                    <div className="w-full flex-1 ">
                        <button className="w-full h-full bg-[#ED0D0D] text-white active:scale-95 rounded-[5px]">Delete All</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Wishlist;