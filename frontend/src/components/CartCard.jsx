import React from "react";
import { X, IndianRupee } from 'lucide-react'

function CartCard(props) {
    return (
        <div className=" bg-[#ffffff] w-full h-12/12 sm:w-3xl sm:h-9/12 md:w-7/12 lg:w-2/12 flex flex-col border rounded-xs" >
            <div className="flex-2 flex flex-col">
                <div className=" flex-1 flex justify-between items-center px-3 mt-2">
                    <div className=" text-xl font-bold flex items-center gap-y-2 bg-red-500 px-4 py-2 text-white rounded-xl"><label className="font-semibold text-xl">50</label> <IndianRupee size={20} /></div>
                    <div className=" w-10 h-10 flex justify-center items-center cursor-pointer" onClick={() => props.setDetail(null)}><X /></div>
                </div>
                <div className=" flex-6 flex flex-col  items-center ">
                    <img src="apple.png" alt="" srcset="" className=" h-50 w-50" />
                    <div className="w-full flex items-center justify-center px-10 mt-20 ">
                        <label className=" text-xl font-bold">Apple</label>
                        <label className=" text-xl font-bold">(per kg)</label>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-row row gap-x-4 px-5 py-4 bg-white rounded-b-xl">
                <div className="flex-1 border flex justify-center items-center rounded-xs">
                    <label htmlFor="" className="">3</label>
                </div>
                <button className=" flex-1 bg-[#FFD558] text-white active:scale-95 rounded-[3px]">Update</button>
            </div>
            <div className="flex-1 bg-white rounded-b-xl flex justify-center items-center">
                <div className=" flex gap-x-2">
                    <label htmlFor="" className="text-gray-600">Sub total : </label>
                    <label htmlFor="" className=" text-red-500">270 /-</label>
                </div>
            </div>
        </div>
    )
}

export default CartCard;