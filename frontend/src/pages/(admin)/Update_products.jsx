import { useState, useContext } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../context/AuthProvider";

function UpdateProducts() {
    const { Db_product, setDbProduct } = useContext(AuthContext);
    const [isloading, setloading] = useState(false);
    const [product, setProduct] = useState({
        _id: "",
        product_name: "",
        description: "",
        price: 0,
        stock: 0,
        category: "Vegitable",
        brand: "",
        unit: "kg"
    })

    async function onUpdate() {
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
        formData.append("unit", product.unit);
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
        setProduct({
            price: 0,
            stock: 0,
            unit: "kg",
            category: "Vegitable"
        })
    }

    function getData(value) {
        setProduct({ ...product, _id:value })
        let selected_product_data = Db_product.filter(data => data._id === value);
        selected_product_data = selected_product_data[0];
        // console.log(selected_product_data)
        setProduct(selected_product_data)
    }

    return (<>
        <div className="w-full h-full flex flex-col justify-center place-items-center">
            <Toaster />
            <div className="w-3/12 h-auto flex flex-col gap-y-4 border-[3px]  rounded-xl py-5">
                <div className="w-full flex place-items-center justify-center">
                    <label htmlFor="" className="text-3xl font-bold">Update Product Details</label>
                </div>
                <div className="flex flex-col justify-center gap-y-4 px-25">
                    <select type="text"
                        placeholder="Select Id"
                        required
                        className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono"
                        value={product._id}
                        onChange={(e) => { getData(e.target.value) }}
                    >
                        {
                            Db_product.map((data) => (
                                <option value={data._id}>{data._id}</option>
                            ))
                        }
                    </select>
                </div>
                <div className=" flex flex-col justify-center gap-y-4 px-25">
                    <input type="text"
                        placeholder="Name"
                        required
                        className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono"
                        value={product.product_name || ""}
                        onChange={(e) => { setProduct({ ...product, product_name: e.target.value }) }}
                    />
                    <input type="text"
                        placeholder="Description"
                        required
                        className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono"
                        value={product.description || ""}
                        onChange={(e) => { setProduct({ ...product, description: e.target.value }) }}
                    />
                    <input type="number"
                        placeholder="Price"
                        required
                        className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono"
                        value={product.price || 0}
                        onChange={(e) => { setProduct({ ...product, price: e.target.value }) }}
                    />
                    <input type="number"
                        placeholder="Stock"
                        required
                        className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono"
                        value={product.stock || 0}
                        onChange={(e) => { setProduct({ ...product, stock: e.target.value }) }}
                    />
                    <select
                        placeholder="Category"
                        className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl text-gray-700 font-mono"
                        required
                        value={product.category || ""}
                        onChange={(e) => { setProduct({ ...product, category: e.target.value }) }}
                    >
                        <option value="Vegitable">Vegitable</option>
                        <option value="Fruit">Fruit</option>
                        <option value="Snack">Snack</option>
                        <option value="Dari">Dari</option>
                    </select>
                    <select
                        placeholder="Unit"
                        className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl text-gray-700 font-mono"
                        required
                        value={product.unit || ""}
                        onChange={(e) => { setProduct({ ...product, unit: e.target.value }) }}
                    >
                        <option value="kg">Kg</option>
                        <option value="li">liter</option>
                    </select>
                    <input type="text"
                        placeholder="Brand"
                        required
                        className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono"
                        value={product.brand || ""}
                        onChange={(e) => { setProduct({ ...product, brand: e.target.value }) }}
                    />
                </div>
                <div className=" flex flex-row justify-between gap-x-4 h-10 px-30">
                    <button className="flex-1 bg-[#42D940] text-xl font-mono text-white rounded-[5px] active:scale-95"
                        onClick={onUpdate}
                        disabled
                    >
                        {isloading ? "Updating..." : "Update"}
                    </button>
                    <button
                        className="flex-1 bg-[#42D940] text-xl font-mono text-white rounded-[5px] active:scale-95"
                        onClick={resetField}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}

export default UpdateProducts;