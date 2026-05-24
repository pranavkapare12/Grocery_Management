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
      const data = await axios.get("http://localhost:3000/data/", { withCredentials: true }).then((data) => {
        console.log(data)
        setUser({ ...user, user: data.data.userData })
        console.log(user)
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
              <Route path='/' element={user?.user?.type === "Customer" ? <Home /> : user?.user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/aboutus' element={user?.user?.type === "Customer" ? <AboutUs /> : user?.user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/contactus' element={user?.user?.type === "Customer" ? <ContactUs /> : user?.user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/shop' element={user?.user?.type === "Customer" ? <Shop /> : user?.user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/order' element={user?.user?.type === "Customer" ? <Orders /> : user?.user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/profile' element={user?.user?.type === "Customer" ? <Profile /> : user?.user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/wishlist' element={user?.user?.type === "Customer" ? <Wishlist /> : user?.user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/cart' element={user?.user?.type === "Customer" ? <Cart /> : user?.user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/finalorder' element={user?.user?.type === "Customer" ? <FinalOrder /> : user?.user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />
              <Route path='/search' element={user?.user?.type === "Customer" ? <Search /> : user?.user?.type === "Vendor" ? <Navigate to="/addproduct" /> : <Navigate to="/login" />} />

              <Route path='/addproduct' element={user?.user?.type === "Vendor" ? <Addproducts /> : user?.user?.type === "Customer" ? <Navigate to="/" /> : <Navigate to="/login" />} />
              <Route path='/updateproduct' element={user?.user?.type === "Vendor" ? <UpdateProducts /> : user?.user?.type === "Customer" ? <Navigate to="/" /> : <Navigate to="/login" />} />
              <Route path='/deleteproduct' element={user?.user?.type === "Vendor" ? <DeleteProduct /> : user?.user?.type === "Customer" ? <Navigate to="/" /> : <Navigate to="/login" />} />
              <Route path='/login' element={!user ? <  Login /> : user?.user?.type === "Customer" ? <Navigate to="/" /> : <Navigate to="/addproduct" />} />
              <Route path='/signup' element={!user ? <  Signup /> : user?.user?.type === "Customer" ? <Navigate to="/" /> : <Navigate to="/addproduct" />} />
            </Routes>
            </>
        }
      </div>
    </>
  )
}

export default App
