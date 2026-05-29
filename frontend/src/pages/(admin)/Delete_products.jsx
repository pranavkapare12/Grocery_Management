import { useState ,useContext} from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../context/AuthProvider";
import { useEffect } from "react";

function DeleteProduct() {

    const [isloading, setloading] = useState(false);
    const { Db_product, setDbProduct } = useContext(AuthContext);
    const [product,setProduct]=useState({})
    const [id,setId]=useState("")
    let ProductData = ""
    async function Delete() {
        if(!product){
            toast.error("Please Add the Id")
            return;
        }
        try{
            setloading(true);
            const result =await axios.post("http://localhost:3000/file/delete",product,{withCredentials:true});
            toast.success("Data is Delete successfully")
            let data = Db_product.filter(data => data._id !== id)
            setDbProduct(data)
            setId("")
            setProduct({})
        }catch(error){
            console.log(error)
        }finally{
            setloading(false);
        }
    }

    function findData(){
        Db_product.forEach((data,index)=>{
            if(data._id === id){
               setProduct(data)
            }
        })
    }

    useEffect(()=>{
        findData();
    },[id])


    return (<>
        <div className="w-full h-full flex flex-col justify-center place-items-center">
            <Toaster />
            <div className="w-auto h-auto flex flex-col gap-y-4 border-[3px]  rounded-xl py-5">
                <div className="w-full flex place-items-center justify-center">
                    <label htmlFor="" className=" text-4xl font-bold">Product Details</label>
                </div>
                <div className=" w-full h-60  flex justify-center place-items-center">
                    <img src={product.url || "../../../public/image.png"} alt="Enter id" className=" w-50 h-50 overflow-hidden" />
                </div>
                <div className=" flex flex-col justify-center gap-y-4 px-25">
                    <select
                        placeholder="PAST ID"
                        required
                        className="w-80 h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono"
                        value={id || ""}
                        onChange={(e)=>{setId(e.target.value)}}
                    >
                        {
                            id ? "" : <option value="">select option</option>
                        }
                        {
                            Db_product.map((data)=>(
                                <option key={data._id} value={data._id}>{data.product_name}</option>
                            ))
                        }
                    </select>
                    
                </div>
                <div className=" flex place-items-center justify-center gap-x-4 h-10 px-30">
                    <button className=" w-auto  bg-[#42D940] text-xl px-10 py-2 font-mono text-white rounded-[5px] active:scale-95"                        
                        onClick={Delete}>
                        {isloading ? "Deleting..." : "Delete"}
                    </button>

                </div>
            </div>

        </div>
    </>
    )
}

export default DeleteProduct;