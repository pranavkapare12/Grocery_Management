import React from "react";
import { X, IndianRupee } from 'lucide-react'
import { useState , useContext , useEffect} from "react";
import { AuthContext } from "../context/AuthProvider";
function WishListCard(props){
    const [data,setData] = useState(props.data);
    const { cart , addToCart ,wishlist , setWishlist , setAmount} = useContext(AuthContext);

    
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
                item._id === data._id ? { ...item , quantity : item.quantity + data.quantity}:
                item
            )
            addToCart(updateCart)
        }else{
            addToCart([...cart,data])
        }

        let filterData = wishlist.filter(product_data => product_data._id !== data._id);
        setWishlist(filterData)

        // setProduct({...product,quantity:0})
    }

    const updateQuantity = (e) =>{
        if(e.target.value > -1){
            setData(prev => ({...prev,quantity:Number(e.target.value)}))
            return;
        }
    }

    useEffect(()=>{
        if(cart.length != 0){
            let value =0;
            cart.map((data)=>{
                value = value + (data.quantity * data.price)
            })
            setAmount(value)
        }
    },[cart])


    return(
        <div className=" bg-[#ffffff]  h-8/12 w-3xl sm:h-8/12 md:w-7/12 lg:w-2/12 rounded-xs flex flex-col border" >
            <div className="flex-2 flex flex-col">
                <div className=" flex-1 flex justify-between items-center px-3 mt-2">
                    <div className=" text-xl font-bold flex items-center gap-y-2 bg-red-500 px-4 py-2 text-white rounded-xl"><label className="font-semibold text-xl">{data.price}</label> <IndianRupee size={20} /></div>
                </div>
                <div className=" flex-5 flex flex-col  items-center ">
                    <img src={data.url} alt="image" className=" h-50 w-50" />
                    <div className="w-full flex items-center justify-center px-10 mt-20 ">
                        <label className=" text-xl font-bold">{data.product_name}</label>
                        <label className=" text-xl font-bold">(per {data.unit})</label>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-2 px-4 py-2">
                <input type="number" className=" flex-1 border px-2 py-1" value={data.quantity || 0} onChange={(e) => updateQuantity(e)} />
                <button className=" flex-1 bg-[#58FF6E] text-white active:scale-95 rounded-[3px]"
                onClick={insertIntoCart}
                >Add to Card</button>
            </div>
        </div>
    )
}

export default WishListCard;