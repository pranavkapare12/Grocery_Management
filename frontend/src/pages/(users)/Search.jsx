import react from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
function Search(){
    return(
        <div className=' w-screen h-screen' style={{ fontFamily: "'Inria Sans', sans-serif" }}>
            <Navbar />
            <div className="flex w-full h-15 justify-center place-items-center text-2xl font-bold">
                <label>Search Page</label>
            </div>
            <Footer />
        </div>
    )
}
export default Search;