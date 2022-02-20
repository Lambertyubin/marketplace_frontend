import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import EditProfile from './user/EditProfile'
import NewShop from './shop/NewShop'
import Shops from './shop/Shops'
import EditShop from './shop/EditShop'
import Menu from './core/Menu'
import NewProduct from './product/NewProduct'
import Product from './product/Product'
import EditProduct from './product/EditProduct'
import StripeConnect from './user/StripeConnect'
import ShopOrders from './order/ShopOrders'
import Cart from './cart/Cart'

const MainRouter = () => {
    return ( 
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/users" element={ <Users /> }/>
        <Route path="/signup" element={ <Signup /> }/>
        <Route path="/signin" element={ <Signin /> }/>
        <Route path="/user/edit/:userId" element={<PrivateRoute><EditProfile /></PrivateRoute>}/>
        <Route path="/user/:userId" element={<PrivateRoute><Profile /></PrivateRoute>}/>
        <Route path="/seller/shop/new" element={<PrivateRoute><NewShop /></PrivateRoute>}/>
        <Route path="/seller/shop/edit/:shopId" element={<PrivateRoute><EditShop /></PrivateRoute>}/>
        <Route path="/shops/all" element={<Shops />}/>

        <Route path="/seller/:shopId/products/new" element={<PrivateRoute><NewProduct /></PrivateRoute>}/>
        <Route path="/product/:productId" element={<Product />}/>
        <Route path="/seller/:shopId/:productId/edit" element={<PrivateRoute><EditProduct /></PrivateRoute>}/>

        <Route path="/cart" element={<Cart />}/>
        <Route path="/seller/stripe/connect" element={<StripeConnect />}/>

        <Route path="/seller/orders/:shop/:shopId" element={<PrivateRoute><ShopOrders /></PrivateRoute>}/>

      </Routes>
    </div>
   )
}

export default MainRouter
