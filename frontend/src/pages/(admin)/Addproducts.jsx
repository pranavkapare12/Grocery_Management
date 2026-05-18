import { useState } from "react";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";

function Addproducts() {

    const [product,setProduct]=useState({
        name:"",
        description:"",
        price:0,
        stock:0,
        category:"",
        Brand:"",
        file:""
    })

    async function onAdd(){
        const result =await axios.post("http://localhost:3000/file/uplode",product,{withCredentials: true});
        try{
            if(result){
                toast.success("Product Added Successfully")
            }
        }catch(error){
            console.log("Error")
            toast.error("Failed to add product")
            console.log(error)
        }
    }

    return (
        <div className="w-full h-full flex justify-center place-items-center">
            <Toaster />
            <div className="w-3/12 h-auto flex flex-col gap-y-4 border-[3px]  rounded-xl py-5">
                <div className="w-full flex place-items-center justify-center">
                    <label htmlFor="" className=" text-4xl font-bold">Product Details</label>
                </div>
                <div className=" flex flex-col justify-center gap-y-4 px-25">
                    <input type="text" 
                    placeholder="Name" 
                    required
                    className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono"
                    value={product.name || ""}
                    onChange={(e)=>{setProduct({...product,name:e.target.value})}}
                    />
                    <input type="text" 
                    placeholder="Description" 
                    required
                    className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono" 
                    value={product.description || ""}
                    onChange={(e)=>{setProduct({...product,description:e.target.value})}}
                    />
                    <input type="number" 
                    placeholder="Price" 
                    required
                    className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono"
                    value={product.price || 0}
                    onChange={(e)=>{setProduct({...product,price:e.target.value})}}
                    />
                    <input type="number" 
                    placeholder="Stock" 
                    required
                    className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono"
                    value={product.stock || 0}
                    onChange={(e)=>{setProduct({...product,stock:e.target.value})}}
                    />
                    <select type="text" 
                    placeholder="Category" 
                    className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl text-gray-700 font-mono"
                    required
                    value={product.category || ""}
                    onChange={(e)=>{setProduct({...product,category:e.target.value})}}
                    >
                        <option value="Vegitable">Vegitable</option>
                        <option value="Fruit">Fruit</option>
                        <option value="Snack">Snack</option>
                        <option value="Dari">Dari</option>
                    </select>
                    <input type="text" 
                    placeholder="Brand" 
                    required
                    className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono"
                    value={product.Brand || ""}
                    onChange={(e)=>{setProduct({...product,Brand:e.target.value})}}
                    />
                    <label
                    htmlFor="files"
                    placeholder="File" 
                    className="w-full h-15 border-4 border-gray-600/80 px-5 text-center pt-3 text-gray-600 font-mono" 
                    >uplode file</label>
                </div>
                <div className=" flex flex-row justify-between gap-x-4 h-10 px-30">
                    <button className="flex-1 bg-[#42D940] text-xl font-mono text-white rounded-[5px] active:scale-95"
                    onClick={onAdd}
                    >Add</button>
                    <button className="flex-1 bg-[#42D940] text-xl font-mono text-white rounded-[5px] active:scale-95">Reset</button>
                </div>
            </div>
            <input type="file"
            id="files"
            required
            hidden
            onChange={(e)=>{setProduct({...product,file:e.target.files[0]})}}
            />
        </div>
    )
}

export default Addproducts;