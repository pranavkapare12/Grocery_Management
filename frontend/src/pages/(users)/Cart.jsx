import react from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CartCard from '../../components/CartCard';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { useContext , useState} from 'react';

function Cart() {
    const navigate = useNavigate();
    const {cart , addToCart} = useContext(AuthContext);
    const [amount,setAmount]=useState(0);

    return (
        <div className=' w-screen h-screen' style={{ fontFamily: "'Inria Sans', sans-serif" }}>
            <div className="flex flex-col w-full max-h-10/12 place-items-center relative">
                <div className='my-4'>
                    <label className='text-3xl font-bold'>PRODUCTS ADDED</label>
                </div>
                <div className='w-full basis-2xl py-5 h-full flex flex-wrap justify-center gap-20 overflow-scroll'>
                    {
                        cart.length !== 0 ?cart.map((data) => <CartCard key={data._id} data={data} amount={amount} setAmount={setAmount}/>):<h1>No products in wishlist</h1>
                    }
                </div>
            </div>
            <div className='w-full h-3/12 flex justify-center items-center bg-transparent pt-5'>
                <div className="flex flex-row h-full w-3/12">
                    <div className="flex-1 h-full w-8/12 sm:w-3/5 md:w-2/5 lg:w-2/12 flex flex-col border py-3 px-10 gap-2">
                        <div className="w-full flex-1 flex justify-center items-center">
                            <label className="text-xl font-semibold">GREAND TOTAL :: {amount} RS</label>
                        </div>
                        <div className="w-full flex-1 ">
                            <button className="w-full h-full bg-[#EDC70D] text-white active:scale-95 rounded-[5px]" onClick={() => navigate('/shop')}>Continue Shopping</button>
                        </div>
                        <div className="w-full flex-1 ">
                            <button className="w-full h-full bg-[#ED0D0D] text-white active:scale-95 rounded-[5px]" onClick={()=> addToCart([])}>Delete All</button>
                        </div>

                        <div className="w-full flex-1 ">
                            <button className="w-full h-full bg-[#0DED48] text-white active:scale-95 rounded-[5px]" onClick={() => navigate('/finalorder')}>Process To Chekout </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Cart;