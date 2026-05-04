import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Shop from './pages/Shop'
import Orders from './pages/Orders'
import Profile from './pages/Profile'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import FinalOrder from './pages/FinalOrder'
import Search from './pages/Search'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <div className='w-screen h-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/order' element={<Orders/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/finalorder' element={<FinalOrder/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
