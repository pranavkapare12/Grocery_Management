import { Eye, IndianRupee } from "lucide-react";
import { useState , useContext} from "react";
import DetailCard from "./DetailCard";
import { AuthContext } from "../context/AuthProvider";
import toast,{Toaster} from "react-hot-toast";

function ShopCard(props) {
    const [detail, setDetail] = useState(null);
    const [ product, setProduct ] = useState(props.product,{quantity:0})
    const {cart , addToCart, wishlist , setWishlist } = useContext(AuthContext);
    const updateQuantity = (e) =>{
        if(e.target.value > -1){
            setProduct(prev => ({...prev,quantity:Number(e.target.value)}))
            return;
        }
    }

    function findId(){
        let index = cart.findIndex(data => data._id === product._id)
        return index;
    }

    function findWishListId(){
        let index = wishlist.findIndex(data => data._id === product._id)
        return index;
    }

    function insertIntoCart(){
        if(product.quantity < 1){
            toast("Product Quanity Should be greater than 0");
            return;
        }

        let index = findId()
        if(index != -1){
            const updateCart = cart.map(item =>
                item._id === product._id ? { ...item , quantity : item.quantity + product.quantity}:
                item
            )
            addToCart(updateCart)
        }else{
            addToCart([...cart,product])
        }
        setProduct({...product,quantity:0})
    }

    function insertIntoWishlist(){
        console.log("Execute")
        if(product.quantity < 1){
            toast("Product Quanity Should be greater than 0");
            return;
        }

        let index = findWishListId()
        if(index != -1){
            const updateCart = wishlist.map(item =>
                item._id === product._id ? { ...item , quantity : item.quantity + product.quantity}:
                item
            )
            setWishlist(updateCart)
        }else{
            setWishlist([...wishlist,product])
        }
        setProduct({...product,quantity:0})
    }

    return (
        <>
        <Toaster />
            <div className='bg-[#ffffff] h-9/12 basis-80 flex flex-col p-2 rounded-[3px] border'>
                <div className="w-full basis-10 flex place-items-center justify-between px-2">
                    <div className=" bg-[#FF4545] rounded-[5px] w-auto flex flex-row place-items-center gap-3 justify-between px-1 py-2 font-bold text-white">
                        <label className="h-5 w-auto text-[18px] flex place-items-center">
                            {product.price}
                        </label>
                        <div className="h-4 w-4">
                            <IndianRupee className=" h-4 w-4" />
                        </div>
                    </div>
                    <div className=" border p-2 rounded-xl cursor-pointer" onClick={() => setDetail('hello')}>
                        <Eye />
                    </div>
                </div>
                <div className=" flex flex-col  items-center ">
                    <img src={product.url} alt="image" className=" h-50 w-50" />
                    <div className="w-full flex items-center justify-center px-10 gap-x-4">
                        <label className=" text-xl font-bold">{ product.product_name}</label>
                        <label className=" text-xl font-bold">(per/{product.unit})</label>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-y-4 p-5">
                    <input type="number" className=" flex-1 border rounded-xs px-4" value={product.quantity || 0} onChange={(e) => updateQuantity(e)}/>
                    <button className=" flex-1 bg-[#FFC258] text-white active:scale-95 rounded-[3px]"
                    onClick={insertIntoWishlist}
                    >Add to Wishlist</button>
                    <button className=" flex-1 bg-[#58FF6E] text-white active:scale-95 rounded-[3px]" onClick={insertIntoCart}>Add to Card</button>
                </div>

                {/* This is to view details of the product in details */}
            </div>
            {
                detail ?
                    <div className=" absolute w-screen h-10/12 bg-gray-200/70 px-10 overflow-scroll flex justify-center items-center">
                        <DetailCard detail={detail} setDetail={setDetail} product={product} setProduct={updateQuantity} />
                    </div> : ""
            }

        </>
    )
}

export default ShopCard;