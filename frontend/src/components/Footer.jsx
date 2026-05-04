import react from "react";
import { Link } from 'react-router-dom'
import { ChevronRight } from "lucide-react";
function Footer() {
    return(<>
        <div className=" mt-4 relative bottom-0 w-full h-4/12 flex flex-wrap md:flex-nowrap justify-evenly place-items-center px-5 md:px-50 shadow-2xl"
        style={{ fontFamily: "'Inria Sans', sans-serif" }}
        >
            <div className="flex flex-col gap-3">
                <label className=" font-bold text-xl"> Quick Links </label>
                <Link to="/" className=" flex flex-row  cursor-pointer"> <ChevronRight className=" text-green-600" /> home</Link>
                <Link to="/shop" className=" flex flex-row cursor-pointer"><ChevronRight className=" text-green-600" />shop</Link>
                <Link to="/aboutus" className=" flex flex-row cursor-pointer"><ChevronRight className=" text-green-600" />about us</Link>
                <Link to="/contactus" className=" flex flex-row cursor-pointer"><ChevronRight className=" text-green-600" />contact</Link>
            </div>
            <div className="flex flex-col gap-3">
                <label className=" font-bold text-xl"> Extra Links </label>
                <Link to="/cart" className=" flex flex-row cursor-pointer"><ChevronRight className=" text-green-600" />cart</Link>
                <Link to="/wishlist" className=" flex flex-row cursor-pointer"><ChevronRight className=" text-green-600" />wish list</Link>
                <Link to="" className=" flex flex-row cursor-pointer"><ChevronRight className=" text-green-600" />login</Link>
                <Link to="" className=" flex flex-row cursor-pointer"><ChevronRight className=" text-green-600" />registre</Link>
            </div>
            <div className="flex flex-col gap-3">
                <label className=" font-bold text-xl"> Contact Info </label>
                <label className=" flex flex-row cursor-pointer"><ChevronRight className=" text-green-600" />+91-9876543210</label>
                <label className=" flex flex-row cursor-pointer"><ChevronRight className=" text-green-600" />+91-1234567890</label>
                <label className=" flex flex-row cursor-pointer"><ChevronRight className=" text-green-600" />pranavkapare@gamil.com</label>
                <label className=" flex flex-row cursor-pointer"><ChevronRight className=" text-green-600" />pune ,india 411028</label>
            </div>
            <div className="flex flex-col gap-3">
                <label className=" font-bold text-xl"> Follow Us </label>
                <label className=" flex flex-row cursor-pointer"><ChevronRight className=" text-green-600" /> Facebook </label>
                <label className=" flex flex-row cursor-pointer"><ChevronRight className=" text-green-600" /> twitter </label>
                <label className=" flex flex-row cursor-pointer"><ChevronRight className=" text-green-600" /> instagram </label>
                <label className=" flex flex-row cursor-pointer"><ChevronRight className=" text-green-600" /> linkedin </label>
            </div>
        </div>
        <div className="w-full h-14 flex justify-center place-items-center text-xl">
            <label>
                © copyright @ 2024 by mr.design | all rights reserved
            </label>
        </div>
        </>
    )
}

export default Footer;