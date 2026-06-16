import react from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function Provider(props){
    return(
    <div className="flex flex-row border w-full bg-white">
        <label className=' flex-2 border-y-0 border-l-0 border p-2 rounded-r-[5px]'>{props.keys}</label>
        <label className=' flex-8 p-2'>{props.value}</label>
    </div>
    )
}

function OrderTemplate(props) {
    var classlg = 'lg:w-11/12 bg-amber-300'
    let product = props.product;

    return (
        <div className="lg:w-[50%] md:px-10 lg:px-30 flex justify-center">
            <div className="flex flex-col gap-y-2.5 bg-[#D9D9D9] w-full px-2 lg:px-4 py-2 pb-5 rounded-xs">
                <div className="flex justify-center place-items-center w-full ">
                    <label className=' font-bold'>ORDER</label>
                </div>
                <Provider keys={"Name"} key={product._id} value={product.name}/>
                <Provider keys={"Email"}  value={product.email}/>
                <Provider keys={"Method"}  value={product.payment === "COD" ? "cash on delevery" : "UPI"}/>
                <Provider keys={"Address"}  value={product.address}/>
                <Provider keys={"Phone No"}  value={product.number}/>
                <Provider keys={"City"}  value={product.city}/>
                <Provider keys={"Country"}  value={product.country}/>
                <Provider keys={"State"}  value={product.state}/>
                <Provider keys={"Pincode"}  value={product.pincode}/>
                {
                    product.product ? 
                    product.product.map((data)=><>
                    <label className=' font-bold'>Product</label>
                    <Provider keys={"Product Name"} value={data.product_name} />
                    <Provider keys={"Category"} value={data.category}/>
                    <Provider keys={"Description"} value={data.description}/>
                    <Provider keys={"Price"} value={data.price}/>
                    <Provider keys={"Quantity"} value={data.quantity + data.unit}/>
                    <Provider keys={"Brand"} value={data.brand}/>
                    </> 
                )
                    :""
                }
                <Provider keys={"TOTAL"} value={product.total}/>
            </div>
        </div>
    )
}

function Orders() {
    const {orders} = useContext(AuthContext);
    return (
        <div className=' w-screen h-screen' style={{ fontFamily: "'Inria Sans', sans-serif" }}>
            <div className=' w-full mt-5 flex justify-center place-items-center'>
                <label className='text-2xl font-bold'>Orders Page</label>
            </div>
            <div className="flex flex-wrap w-full gap-y-5 justify-center place-items-center">
                {
                    orders ? orders.map((data)=><OrderTemplate key={data._id} product={data} />) : ""
                }
            </div>
            <Footer />
        </div>
    )
}
export default Orders;