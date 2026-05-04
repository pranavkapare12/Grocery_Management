import react from 'react';
import { Link } from 'react-router-dom';
import { CircleUser } from 'lucide-react';
function Navbar() {
    return (
        <div className=' relative top-0 w-full h-15 flex justify-between place-items-center px-1 sm:px-1 md:px-3 lg:px-12 shadow-lg' style={{ fontFamily: "'Inria Sans', sans-serif" }}>
            <div className=" font-bold text-2xl flex place-items-center" >
                <label>GrocyHub</label>
            </div>
            <div className=" flex justify-between gap-1 text-xl sm:gap-3 md:gap-6 lg:gap-10">
                <Link to="/" className="">Home</Link>
                <Link to="/shop" className="">Shop</Link>
                <Link to="/order" className="">Order</Link>
                <Link to="/aboutus" className="">About</Link>
                <Link to="/contactus" className="">Contact Us</Link>
            </div>
            <div className=" flex justify-between gap-1 sm:gap-1 md:gap-3 lg:gap-6 text-xl">
                <Link to="/profile" className=''>
                    <CircleUser className='size-8' />
                </Link>
                <Link to="/wishlist" className='flex flex-row place-items-end'>
                    <img src="/heart.png" className='size-8'/>
                    <span className=' relative border-0 text-sm'>0</span>
                </Link>
                <Link to="/cart" className='flex flex-row place-items-end'>
                    <img src="/shopping-cart.png" className=' size-8' />
                    <span className=' relative border-0 text-sm'>0</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;