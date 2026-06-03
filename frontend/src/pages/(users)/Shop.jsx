import react,{useState , useContext} from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ShopCard from '../../components/ShopCard';
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../../context/AuthProvider";
import { useEffect } from 'react';

function Shop(){
    const data = useLocation();
    const [filterValue , setFilterValue] = useState(data.state);
    const {Db_product} = useContext(AuthContext);
    let [product,setProduct ]= useState(Db_product);
    function setValue(){
        if (filterValue){
            product = Db_product.filter(data => data.category === filterValue)
            setProduct(product)
        }
    }
    useEffect(()=>{setValue()},[filterValue])

    return(
        <div className=' w-screen h-screen' style={{ fontFamily: "'Inria Sans', sans-serif" }}>
            <div className="flex flex-col w-full h-full place-items-center relative">
                <div className='w-full h-15 flex flex-row justify-center place-items-center gap-2 sm:gap-10 my-4'>
                    <label className=" bg-[#D9D9D9] py-4 px-7 border-2 border-black rounded-[3px] active:scale-95 cursor-pointer" onClick={()=>{setFilterValue("Vegitable")}}>VEGITABLES</label>
                    <label className=" bg-[#D9D9D9] py-4 px-7 border-2 border-black rounded-[3px] active:scale-95 cursor-pointer" onClick={()=>{setFilterValue("Fruit")}}>FRUITS</label>
                    <label className=" bg-[#D9D9D9] py-4 px-7 border-2 border-black rounded-[3px] active:scale-95 cursor-pointer" onClick={()=>{setFilterValue("Snack")}}>SNACKS</label>
                    <label className=" bg-[#D9D9D9] py-4 px-7 border-2 border-black rounded-[3px] active:scale-95 cursor-pointer" onClick={()=>{setFilterValue("Dairy")}}>DAIRY</label>
                </div>
                <div className='my-4'>
                    <label className='text-3xl font-bold'>Latest Product</label>
                </div>
                <div className='w-full basis-2xl py-5 flex flex-wrap justify-center gap-20 overflow-scroll'>
                    {
                        product.length !== 0 ?
                        product.map((data)=>(
                            <ShopCard product={data} key={data._id} />
                        ))
                        : "Product are not avilable"
                    }
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Shop;

// Winter Survivor Protocol