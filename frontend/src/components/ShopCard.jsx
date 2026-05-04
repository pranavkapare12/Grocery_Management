import { Eye, IndianRupee } from "lucide-react";
import { useState } from "react";
import DetailCard from "./DetailCard";
function ShopCard(props) {
    const [detail, setDetail] = useState(null);
    const { product, setProduct } = props;
    return (
        <>
            <div className='bg-[#ffffff] h-9/12 basis-80 flex flex-col p-2 rounded-[3px] border'>
                <div className="w-full basis-10 flex place-items-center justify-between px-2">
                    <div className=" bg-[#FF4545] rounded-[5px] w-auto flex flex-row place-items-center gap-3 justify-between px-1 py-2 font-bold text-white">
                        <label className="h-5 w-auto text-[18px] flex place-items-center">5000</label>
                        <div className="h-4 w-4">
                            <IndianRupee className=" h-4 w-4" />
                        </div>
                    </div>
                    <div className=" border p-2 rounded-xl cursor-pointer" onClick={() => setDetail('hello')}>
                        <Eye />
                    </div>
                </div>
                <div className=" flex flex-col  items-center ">
                    <img src="apple.png" alt="" srcset="" className=" h-50 w-50" />
                    <div className="w-full flex items-center justify-center px-10 ">
                        <label className=" text-xl font-bold">Apple</label>
                        <label className=" text-xl font-bold">(per kg)</label>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-y-4 p-5">
                    <input type="number" className=" flex-1 border rounded-xs px-4" value={product.quantity} onChange={(e) => setProduct(e)}/>
                    <button className=" flex-1 bg-[#FFC258] text-white active:scale-95 rounded-[3px]">Add to Wishlist</button>
                    <button className=" flex-1 bg-[#58FF6E] text-white active:scale-95 rounded-[3px]">Add to Card</button>
                </div>

                {/* This is to view details of the product in details */}
            </div>
            {
                detail ?
                    <div className=" absolute w-screen h-10/12 bg-gray-200/70 px-10 overflow-scroll flex justify-center items-center">
                        <DetailCard detail={detail} setDetail={setDetail} product={product} setProduct={setProduct} />
                    </div> : ""
            }

        </>
    )
}

export default ShopCard;