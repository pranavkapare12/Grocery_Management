import { Toaster ,toast} from "react-hot-toast"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function Product(props) {

    async function copyId(){
        await navigator.clipboard.writeText(props.data._id).then(()=>{
            toast.success("Text Copy to clipboard")
        }).catch((error)=>{
            toast.error("Failed to copy id")
        })
    }

    return (
        <div className="flex flex-col px-5 py-4 border-4 h-5/12 min:w-2/12 rounded-[10px]">
            <div className="flex-2 flex justify-center place-items-center">
                <img src={props.data.url || ""} alt="apple image" className="h-30 w-30" />
            </div>
            <div className=" flex-4 flex flex-col">
                <div className="flex-1 flex justify-baseline gap-x-3 place-items-center">
                    <label htmlFor="" className="">Name</label>
                    <label htmlFor="" className="">{props.data.product_name || ""}</label>
                </div>
                <div className="flex-1 flex justify-baseline gap-x-3 place-items-center">
                    <label htmlFor="" className="">Desc</label>
                    <label htmlFor="" className="">{props.data.description || ""}</label>
                </div>
                <div className="flex-1 flex justify-baseline gap-x-3 place-items-center">
                    <label htmlFor="" className="">Price</label>
                    <label htmlFor="" className="">{props.data.price || 0} Rs</label>
                </div>
                <div className="flex-1 flex justify-baseline gap-x-3 place-items-center">
                    <label htmlFor="" className="">Stock</label>
                    <label htmlFor="" className="">{props.data.stock || 0} {props.data.unit || "none"}</label>
                </div>
                <div className="flex-1 flex justify-baseline gap-x-3 place-items-center">
                    <label htmlFor="" className="">Category</label>
                    <label htmlFor="" className="">{props.data.category}</label>
                </div>
                <div className="flex-1 flex justify-baseline gap-x-3 place-items-center">
                    <label htmlFor="" className="">Brand</label>
                    <label htmlFor="" className="">{props.data.brand}</label>
                </div>
                <div className="flex-1 flex justify-baseline gap-x-3 place-items-center">
                    <label htmlFor="" className="">Id : {props.data._id}</label>
                    <button className=" bg-gray-600 text-white px-4 py-1 rounded-[10px] active:scale-90" onClick={copyId}>copy id</button>
                </div>
            </div>
        </div>
    )
}

function ListProduct() {
    const { Db_product, setDbProduct } = useContext(AuthContext);
    return (
        <>
            <div className="w-screen h-screen flex flex-col justify-center place-items-center">
                <Toaster />
                <div className=" w-full h-full flex justify-center flex-row flex-wrap gap-5 rounded-xl py-5 px-10">
                    {
                        Db_product.map((data) => (
                                <Product key={data._id} data={data}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ListProduct;