import React from "react";
import { X, IndianRupee } from 'lucide-react'
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function CartCard(props) {
    const [data, setData ]= useState(props.data);
    const { cart , addToCart } = useContext(AuthContext);
    function findId(){
        let index = cart.findIndex(index => index._id === data._id)
        return index;
    }

    function insertIntoCart(){
        if(data.quantity < 1){
            toast("Product Quanity Should be greater than 0");
            return;
        }

        let index = findId()
        if(index != -1){
            const updateCart = cart.map(item =>
                item._id === data._id ? { ...item , quantity : item.quantity = data.quantity}:
                item
            )
            addToCart(updateCart)
        }else{
            addToCart([...cart,data])
        }
    }

    const updateQuantity = (e) =>{
        if(e.target.value > -1){
            setData(prev => ({...prev,quantity:Number(e.target.value)}))
            return;
        }
    }
    return (
        <div className=" bg-[#ffffff] w-full h-12/12 sm:w-3xl sm:h-9/12 md:w-7/12 lg:w-2/12 flex flex-col border rounded-xs" >
            <div className="flex-2 flex flex-col">
                <div className=" flex-1 flex justify-between items-center px-3 mt-2">
                    <div className=" text-xl font-bold flex items-center gap-y-2 bg-red-500 px-4 py-2 text-white rounded-xl"><label className="font-semibold text-xl">{data.price}</label> <IndianRupee size={20} /></div>
                    <div className=" w-10 h-10 flex justify-center items-center cursor-pointer" onClick={() => props.setDetail(null)}><X /></div>
                </div>
                <div className=" flex-6 flex flex-col  items-center ">
                    <img src={data.url} alt="image" className=" h-50 w-50" />
                    <div className="w-full flex items-center justify-center px-10 mt-20 ">
                        <label className=" text-xl font-bold">{data.product_name}</label>
                        <label className=" text-xl font-bold">(per/{data.unit})</label>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-row row gap-x-4 px-5 py-4 bg-white rounded-b-xl">
                <div className="flex-1 border flex justify-center items-center rounded-xs">
                    <input type="number" value={data.quantity}  onChange={(e) => updateQuantity(e)}/>
                </div>
                <button className=" flex-1 bg-[#FFD558] text-white active:scale-95 rounded-[3px]"
                onClick={insertIntoCart}
                >Update</button>
            </div>
            <div className="flex-1 bg-white rounded-b-xl flex justify-center items-center">
                <div className=" flex gap-x-2">
                    <label htmlFor="" className="text-gray-600">Sub total : </label>
                    <label htmlFor="" className=" text-red-500">{data.quantity * data.price} /-</label>
                </div>
            </div>
        </div>
    )
}

export default CartCard;