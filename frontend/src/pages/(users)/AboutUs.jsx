import react from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
function AboutUs() {
    return (
        <div className='w-screen h-screen flex flex-col' style={{ fontFamily: "'Inria Sans', sans-serif" }}>
            <Navbar />
            <div className="w-full h-full flex flex-row flex-wrap justify-center gap-20 p-5 overflow-scroll">
                <div className=" basis-150 flex flex-col">
                    <div className=" basis-110 flex flex-col justify-center place-items-center">
                        <div className=" basis-90 w-full flex justify-center place-items-center">
                            <img src="paper-bag.png" alt="" className=' h-90 w-80' />
                        </div>
                        <div className=" text-xl font-bold basis-15 w-full flex justify-center place-items-center">
                            <label>What we Provide?</label>
                        </div>
                    </div>
                    <div className=" basis-70 flex flex-col justify-center ">
                        <div className="basis-40 w-full flex justify-center place-items-center text-gray-700/70">
                            <label>
                                We provide fresh and quality groceries with proper checks to ensure the best experience for our customers. Our fast and reliable delivery system ensures that orders reach your doorstep safely and on time. The platform is designed to be simple and easy to use for customers, administrators, and delivery partners alike. With a smart management system, admins can efficiently handle products, users, orders, and real-time order tracking from a single dashboard. Built using modern MERN stack technology, the system is secure, scalable, and focused on customer convenience and satisfaction.
                            </label>
                        </div>
                        <div className=" text-xl font-bold basis-15 w-full flex justify-center place-items-center px-20">
                            <Link to="/contactus" className='px-20 py-4 bg-[#3FE23C] text-white rounded-[5px]'>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=" basis-150 flex flex-col">
                    <div className=" basis-110 flex flex-col justify-center place-items-center">
                        <div className=" basis-90 w-full flex justify-center place-items-center">
                            <img src="about-img-2.png" alt="" className=' h-90 w-80' />
                        </div>
                        <div className=" text-xl font-bold basis-15 w-full flex justify-center place-items-center">
                            <label>What we Provide?</label>
                        </div>
                    </div>
                    <div className=" basis-70 flex flex-col justify-center ">
                        <div className="basis-40 w-full flex justify-center place-items-center text-gray-700/70">
                            <label>
                                We provide fresh and quality groceries with a fast and reliable delivery system.Our platform offers easy shopping, real-time order tracking, and secure payments.We ensure smart management, modern technology, and a smooth user experience for everyone.
                            </label>
                        </div>
                        <div className=" text-xl font-bold basis-15 w-full flex justify-center place-items-center px-20">
                            <Link to="/shop" className='px-20 py-4 bg-[#3FE23C] text-white rounded-[5px]'>
                                Our Shop
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default AboutUs;