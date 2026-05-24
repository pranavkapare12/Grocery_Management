import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar";

function DeleteProduct() {

    const [isloading, setloading] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
        stock: 0,
        category: "",
        Brand: "",
        file: ""
    })

    async function DeleteProduct() {
        const formData = new FormData();
        if (product.name == "" || product.description == "" || product.price == 0 || product.stock == 0 || product.category == "" || product.Brand == "" || product.file == "") {
            toast.error("All fields are required");
            return;
        }

        formData.append("name", product.name);
        formData.append("description", product.description);
        formData.append("price", product.price);
        formData.append("stock", product.stock);
        formData.append("category", product.category);
        formData.append("brand", product.Brand);
        formData.append("image", product.file)
        let result;
        try {
            setloading(true);
            result = await axios.post("http://localhost:3000/file/uplode", formData, { withCredentials: true });
            if (result.status === 200) {
                toast.success("Product Added Successfully")
            }
        } catch (error) {
            console.log(result)
            toast.error("Failed to add products")
        }
        finally {
            setloading(false);
        }
    }

    function resetField() {
        setProduct({ name: "" })
    }

    return (<>
        <div className="w-full h-full flex flex-col justify-center place-items-center">
            <Toaster />
            <div className="w-auto h-auto flex flex-col gap-y-4 border-[3px]  rounded-xl py-5">
                <div className="w-full flex place-items-center justify-center">
                    <label htmlFor="" className=" text-4xl font-bold">Product Details</label>
                </div>
                <div className=" w-full h-60  flex justify-center place-items-center">
                    <img src="../../../public/apple.png" alt="image" className=" w-60 h-60 overflow-hidden" />
                </div>
                <div className=" flex flex-col justify-center gap-y-4 px-25">
                    <select type="text"
                        placeholder="Name"
                        required
                        className="w-80 h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono"
                    >
                        <option value="Apple">Apple</option>
                        <option value="Banana">Banana</option>
                        <option value="Mango">Mango</option>
                        <option value="Milk">Milk</option>
                        <option value="Orange">Orange</option>
                    </select>
                </div>
                <div className=" flex place-items-center justify-center gap-x-4 h-10 px-30">
                    <button className=" w-auto  bg-[#42D940] text-xl px-10 py-2 font-mono text-white rounded-[5px] active:scale-95"
                        onClick={DeleteProduct}
                        disabled
                    >
                        {isloading ? "Deleting..." : "Delete"}
                    </button>

                </div>
            </div>

        </div>
    </>
    )
}

export default DeleteProduct;