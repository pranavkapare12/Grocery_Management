import react,{useState} from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ShopCard from '../../components/ShopCard';
function Shop(){
    const [product , setProduct] = useState({
        name : "Apple",
        price : 50,
        quantity : 1
    })
    const updateQuantity = (e) =>{
        if(e.target.value > -1){
            setProduct(prev => ({...prev,quantity:e.target.value}))
            return;
        }
    }
    return(
        <div className=' w-screen h-screen' style={{ fontFamily: "'Inria Sans', sans-serif" }}>
            <Navbar />
            <div className="flex flex-col w-full h-full place-items-center relative">
                <div className='w-full h-15 flex flex-row justify-center place-items-center gap-2 sm:gap-10 my-4'>
                    <label className=" bg-[#D9D9D9] py-4 px-7 border-2 border-black rounded-[3px] active:scale-95 cursor-pointer">VEGITABLES</label>
                    <label className=" bg-[#D9D9D9] py-4 px-7 border-2 border-black rounded-[3px] active:scale-95 cursor-pointer">FRUITS</label>
                    <label className=" bg-[#D9D9D9] py-4 px-7 border-2 border-black rounded-[3px] active:scale-95 cursor-pointer">SNACKS</label>
                    <label className=" bg-[#D9D9D9] py-4 px-7 border-2 border-black rounded-[3px] active:scale-95 cursor-pointer">DARI</label>
                </div>
                <div className='my-4'>
                    <label className='text-3xl font-bold'>Latest Product</label>
                </div>
                <div className='w-full basis-2xl py-5 flex flex-wrap justify-center gap-20 overflow-scroll'>
                    <ShopCard product={product} setProduct={updateQuantity} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Shop;