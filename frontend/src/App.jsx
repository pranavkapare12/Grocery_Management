import './App.css'
// User Pages
import Login from './pages/(users)/Login'
import Signup from './pages/(users)/Signup'
import Home from './pages/(users)/Home'
import AboutUs from './pages/(users)/AboutUs'
import ContactUs from './pages/(users)/ContactUs'
import Shop from './pages/(users)/Shop'
import Orders from './pages/(users)/Orders'
import Profile from './pages/(users)/Profile'
import Wishlist from './pages/(users)/Wishlist'
import Cart from './pages/(users)/Cart'
import FinalOrder from './pages/(users)/FinalOrder'
import Search from './pages/(users)/Search'
import Loader from './components/Loader'

// Admin Pages
import Addproducts from './pages/(admin)/Addproducts'
// React Dom Properties
import { Route, Routes, Navigate } from 'react-router-dom'
// USER DATA STORAGE
import { useContext, useState, useEffect } from 'react'
// AuthContext
import { AuthContext } from './context/AuthProvider'

import axios from 'axios'
function App() {
  const { user, setUser } = useContext(AuthContext);
  const [login, setLogin] = useState(false);

  async function fetchData() {
    try {
      setLogin(true)
      const data =await axios.get("http://localhost:3000/data/", { withCredentials: true }).then((data) => {
        console.log(data)
        setUser({ ...user, user: data.data.userData })
      });
    } catch (error) {
      console.log(error)
    }
    finally {
      setLogin(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>
      <div className='w-screen h-screen'>
        {
          login ? <Loader /> :
              <Routes>
                <Route path='/' element={user?.user?.type === "Customer" ? <Home /> : user?.user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
                <Route path='/aboutus' element={user?.user?.type === "Customer" ? <AboutUs /> : user?.user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
                <Route path='/contactus' element={<ContactUs />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/order' element={<Orders />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/finalorder' element={<FinalOrder />} />
                <Route path='/search' element={<Search />} />

                <Route path='/addproduct' element={<Addproducts />} />

                <Route path='/login' element={<Login data={user?.user?.type} />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
          }
      </div>
    </>
  )
}

export default App
