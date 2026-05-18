import react from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import NavigationCard from '../../components/NavigationCard';
function Home(){
    return(
        <div className='h-screen w-screen'>
            <Navbar />
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
                        <NavigationCard imgUrl={"vegitable.png"} route={"/shop"} head={"VEGETABLES"}/>
                        <NavigationCard imgUrl={"fruits.png"} route={"/shop"} head={"FRUITS"}/>
                        <NavigationCard imgUrl={"snacks.png"} route={"/shop"} head={"SNACK"}/>
                        <NavigationCard imgUrl={"dariproducts.png"} route={"/shop"} head={"Dari"}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;