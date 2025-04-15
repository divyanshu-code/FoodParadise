import React, { useState } from 'react'
import Header from './componenets/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeorder/PlaceOrder'
import Footer from './componenets/footer/Footer'
import LogIn from './componenets/login/LogIn'


const App = () => {
 
  const [login, setlogin] = useState(false)
  const [cart, setcart] = useState(false)

  return (
    <>
        
        {login ? <LogIn login={setlogin}/> : <> </>}
        
        {cart ? <Cart /> :<></>}

        <Header login={setlogin} cart={setcart}/>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder/>} />
        </Routes>

        <Footer/>
        
    </>
  )
}

export default App