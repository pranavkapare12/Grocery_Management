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

// Admin Pages
import Addproducts from './pages/(admin)/Addproducts'

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
        
        <Route path='/addproduct' element={<Addproducts/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
