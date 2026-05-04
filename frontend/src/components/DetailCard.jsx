import React,{useState} from "react";
import { X ,IndianRupee} from 'lucide-react'

function DetailCard(props) {
    console.log(props);
    const {product,setProduct} = props;
    return (
        <div className=" bg-[#ffffff] w-full h-auto sm:w-3xl sm:h-8/12 md:w-7/12 lg:w-2/12 flex flex-col rounded-xl border " >
            <div className="flex-2 flex flex-col">
                <div className=" flex-1 flex justify-between items-center px-3 mt-2">
                    <div className=" text-xl font-bold flex items-center gap-y-2 bg-red-500 px-4 py-2 text-white rounded-xl"><label className="font-semibold text-xl">50</label> <IndianRupee size={20} /></div>
                    <div className=" w-10 h-10 flex justify-center items-center cursor-pointer" onClick={() => props.setDetail(null)}><X /></div>
                </div>
                <div className=" flex-6 flex flex-col  items-center ">
                    <img src="apple.png" alt="" srcset="" className=" h-50 w-50" />
                    <div className="w-full flex items-center justify-center px-10 mt-20 ">
                        <label className=" text-xs font-bold">Apple</label>
                        <label className=" text-xs font-bold">(per kg)</label>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-2 p-5 bg-white rounded-b-xl">
                <input type="number" className=" flex-1 px-4 border" value={product.quantity}  onChange={(e) => setProduct(e)} />
                <button className=" flex-1 bg-[#FFC258] text-white active:scale-95 rounded-[3px]">Add to Wishlist</button>
                <button className=" flex-1 bg-[#58FF6E] text-white active:scale-95 rounded-[3px]">Add to Card</button>
            </div>
        </div>
    )
}

export default DetailCard;