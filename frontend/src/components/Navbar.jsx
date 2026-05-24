import react from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import { CircleUser } from 'lucide-react';
import { useContext, useState } from 'react';
import axios from 'axios';

function Navbar() {
    const { user, setUser } = useContext(AuthContext);
    const [loding, setLoading] = useState(false);
    async function logout() {
        try {
            setLoading(true)
            const conform = window.confirm("Do you Want to logout")
            if (conform) {
                let result = await axios.post("http://localhost:3000/auth/logout", { withCredintial: true }).then((data) => {
                    console.log(data);
                    setUser(null)
                })
            } else {
                return;
                setLoading(false)
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    console.log(user)
    return (
        <div className=' relative top-0 w-full h-15 flex justify-between place-items-center px-1 sm:px-1 md:px-3 lg:px-12 shadow-lg' style={{ fontFamily: "'Inria Sans', sans-serif" }}>
            <div className=" font-bold text-2xl flex place-items-center" >
                <label>GrocyHub</label>
            </div>
            <div className=" flex justify-between gap-1 text-xl sm:gap-3 md:gap-6 lg:gap-10">
                {
                    user?.user?.type == "Customer" ? <>
                        <Link to="/" className="">Home</Link>
                        <Link to="/shop" className="">Shop</Link>
                        <Link to="/order" className="">Order</Link>
                        <Link to="/aboutus" className="">About</Link>
                        <Link to="/contactus" className="">Contact Us</Link>
                    </>
                        : user?.user?.type == "Vendor" ? <>
                            <Link to="/addproduct" className=" focus:border-b-4">Add Product</Link>
                            <Link to="/updateproduct" className=" focus:border-b-4">Update</Link>
                            <Link to="/deleteproduct" className=" focus:border-b-4">Delete</Link>
                        </> : ""
                }

            </div>
            <div className=" flex justify-between gap-1 sm:gap-1 md:gap-3 lg:gap-6 text-xl">
                {
                    user?.user?.type == "Customer" ? <>
                        <Link to="/profile" className=''>
                            <CircleUser className='size-8' />
                        </Link>
                        <Link to="/wishlist" className='flex flex-row place-items-end'>
                            <img src="/heart.png" className='size-8' />
                            <span className=' relative border-0 text-sm'>0</span>
                        </Link>
                        <Link to="/cart" className='flex flex-row place-items-end'>
                            <img src="/shopping-cart.png" className=' size-8' />
                            <span className=' relative border-0 text-sm'>0</span>
                        </Link>

                    </> : ""
                }

                {
                    user?.user ? <button className='bg-blue-500 px-2 py-1 rounded-2xl text-white font-mono border-0 active:scale-90' onClick={logout}>
                        Logout
                    </button> : ""
                }
            </div>
        </div>
    )
}

export default Navbar;