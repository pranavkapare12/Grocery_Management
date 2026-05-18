function Addproducts() {
    return (
        <div className="w-full h-full flex justify-center place-items-center">
            <div className="w-3/12 h-auto flex flex-col gap-y-4 border-[3px]  rounded-xl py-5">
                <div className="w-full flex place-items-center justify-center">
                    <label htmlFor="" className=" text-4xl font-bold">Product Details</label>
                </div>
                <div className=" flex flex-col justify-center gap-y-4 px-25">
                    <input type="text" 
                    placeholder="Name" 
                    className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono" 
                    />
                    <input type="text" 
                    placeholder="Description" 
                    className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono" 
                    />
                    <input type="number" 
                    placeholder="Price" 
                    className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono" 
                    />
                    <input type="number" 
                    placeholder="Stock" 
                    className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono" 
                    />
                    <input type="text" 
                    placeholder="Category" 
                    className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono" 
                    />
                    <input type="text" 
                    placeholder="Brand" 
                    className="w-full h-15 border-4 border-gray-600/80 px-5 rounded-xl text-xl font-mono" 
                    />
                    <label
                    htmlFor="files"
                    placeholder="File" 
                    className="w-full h-15 border-4 border-gray-600/80 px-5 text-center pt-3 text-gray-600 font-mono" 
                    >uplode file</label>
                </div>
                <div className=" flex flex-row justify-between gap-x-4 h-10 px-30">
                    <button className="flex-1 bg-[#42D940] text-xl font-mono text-white rounded-[5px] active:scale-95">Add</button>
                    <button className="flex-1 bg-[#42D940] text-xl font-mono text-white rounded-[5px] active:scale-95">Reset</button>
                </div>
            </div>
            <input type="file" name="" id="files" className="h-0 w-0"/>
        </div>
    )
}

export default Addproducts;