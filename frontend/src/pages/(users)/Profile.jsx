import react from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { User } from 'lucide-react';
function Profile() {
    return (
        <div className=' w-screen h-screen' style={{ fontFamily: "'Inria Sans', sans-serif" }}>
            <Navbar />
            <div className="flex-1 flex w-full h-7/12 justify-center text-2xl font-bold mt-4">
                <div className=' bg-[#D9D9D9] w-3/12 h-10/12 flex p-10 justify-center flex-col'>
                    <div className='w-full flex flex-1 justify-center items-center'>
                        <div className='w-32 h-32 bg-white rounded-full flex justify-center items-center'>
                            <User size={50} />
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <div className=" flex-1 flex items-center gap-x-4">
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">user name</label>
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">Joey Dev</label>
                        </div>
                        <div className=" flex-1 flex items-center gap-x-4">
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">email</label>
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">JoeyDev123@gmail.com</label>
                        </div>
                        <div className=" flex-1 flex items-center gap-x-4">
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">Create at</label>
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">10-12-2024</label>
                        </div>
                        <div className=" flex-1 flex items-center gap-x-4">
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">Last Order</label>
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">3-12-2024</label>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Profile;