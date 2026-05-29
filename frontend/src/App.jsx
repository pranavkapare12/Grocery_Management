import './App.css'

import Navbar from './components/Navbar'

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
import UpdateProducts from './pages/(admin)/Update_products'
import DeleteProduct from './pages/(admin)/Delete_products'
import ListProduct from './pages/(admin)/List_products'

// React Dom Properties
import { Route, Routes, Navigate } from 'react-router-dom'
// USER DATA STORAGE
import { useContext, useState, useEffect } from 'react'
// AuthContext
import { AuthContext } from './context/AuthProvider'

// Landing Page
import Landing from './components/LandingPage'

import axios from 'axios'
function App() {
  const { user, setUser, Db_product, setDbProduct} = useContext(AuthContext);
  const [login, setLogin] = useState(false);

  async function fetchData() {
    try {
      setLogin(true)
      const data = await axios.get("http://localhost:3000/data/", { withCredentials: true }).then((data) => {
        setUser(data.data.userData )
        setDbProduct( data.data.products )
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
          <>
          <Navbar />
            <Routes>
              <Route path='/' element={user?.type === "Customer" ? <Home /> : user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/aboutus' element={user?.type === "Customer" ? <AboutUs /> : user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/contactus' element={user?.type === "Customer" ? <ContactUs /> : user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/shop' element={user?.type === "Customer" ? <Shop /> : user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/order' element={user?.type === "Customer" ? <Orders /> : user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/profile' element={user?.type === "Customer" ? <Profile /> : user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/wishlist' element={user?.type === "Customer" ? <Wishlist /> : user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/cart' element={user?.type === "Customer" ? <Cart /> : user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/finalorder' element={user?.type === "Customer" ? <FinalOrder /> : user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/search' element={user?.type === "Customer" ? <Search /> : user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/addproduct' element={user?.type === "Vendor" ? <Addproducts /> : user?.type === "Customer" ? <Navigate to="/" /> : <Navigate to="/login" />} />
              <Route path='/updateproduct' element={user?.type === "Vendor" ? <UpdateProducts /> : user?.type === "Customer" ? <Navigate to="/" /> : <Navigate to="/login" />} />
              <Route path='/deleteproduct' element={user?.type === "Vendor" ? <DeleteProduct /> : user?.type === "Customer" ? <Navigate to="/" /> : <Navigate to="/login" />} />
              <Route path='/listproduct' element={user?.type === "Vendor" ? <ListProduct /> : user?.type === "Customer" ? <Navigate to="/" /> : <Navigate to="/login" />} />
              <Route path='/login' element={!user?.type ? <  Login /> : user?.type === "Customer" ? <Navigate to="/" /> : <Navigate to="/addproduct" />} />
              <Route path='/signup' element={!user?.type ? <  Signup /> : user?.type === "Customer" ? <Navigate to="/" /> : <Navigate to="/addproduct" />} />
              <Route path='/landing' element={!user?.type ? <  Landing /> : user?.type === "Customer" ? <Navigate to="/" /> : <Navigate to="/addproduct" />} />
            </Routes>
            </>
        }
      </div>
    </>
  )
}

export default App
