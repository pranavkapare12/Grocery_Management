import react from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import NavigationCard from '../../components/NavigationCard';
function Home(){
    return(
        <div className='h-screen w-screen'>
            <div className='w-full h-11/12 flex flex-col' style={{ fontFamily: "'Inria Sans', sans-serif" }}>
                <div className='w-full h-7/12 bg-[#E9E9E9] p-10'>
                 <div className='flex flex-col gap-4 '>
                    <label className='text-4xl font-bold'>Welcome to GrocyHub</label>
                    <label>Your daily groceries, all in one hub</label>
                    <label>From store to door, we deliver happiness.</label>
                    <label>Smart grocery management for a smarter lifestyle.</label>
                    <label className='h-12 w-25 bg-[#42D940] flex place-items-center justify-center active:scale-95 rounded-[5px] text-white font-bold'>about us</label>
                 </div>
                </div>
                <div className='w-full h-7/12 bg-white  px-10 flex flex-col justify-center'>
                    <div className='text-2xl font-bold basis-2 flex justify-center my-2'><label>Shop by Category</label></div>
                    <div className=" w-full basis-2xl py-10 flex flex-wrap justify-center gap-20 overflow-scroll">
                        <NavigationCard 
                        imgUrl={"vegitable.png"} 
                        route={"/shop"} 
                        head={"Vegitable"} 
                        content={"A variety of fresh and nutritious vegetables sourced directly from local farms. Ideal for preparing wholesome meals, providing a natural source of vitamins, antioxidants, and dietary fiber."}/>
                        <NavigationCard 
                        imgUrl={"fruits.png"} 
                        route={"/shop"} 
                        head={"Fruits"}
                        content={"Fresh, juicy, and naturally sweet fruits sourced from trusted farms. Rich in vitamins, minerals, and antioxidants, they are perfect for a healthy and refreshing diet."}
                        />
                        <NavigationCard 
                        imgUrl={"snacks.png"} 
                        route={"/shop"} 
                        head={"Snack"}
                        content={"Nutritious and flavorful snacks made with wholesome ingredients. A great option for those looking for a healthier alternative without compromising on taste."}
                        />
                        <NavigationCard 
                        imgUrl={"dariproducts.png"} 
                        route={"/shop"} 
                        head={"Dairy"}
                        content={"Fresh dairy products rich in calcium, protein, and essential nutrients. Perfect for everyday nutrition and healthy living."}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;