import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/core/Home";
import Users from "./components/user/Users";
import Signup from "./components/user/Signup";
import Signin from "./components/auth/Signin";
import Profile from "./components/user/Profile";
import PrivateRoute from "./components/auth/PrivateRoute";
import EditProfile from "./components/user/EditProfile";
import NewShop from "./components/shop/NewShop";
import Shops from "./components/shop/Shops";
import EditShop from "./components/shop/EditShop";
import MyShops from "./components/shop/MyShops";
import NewProduct from "./components/product/NewProduct";
import Product from "./components/product/Product";
import EditProduct from "./components/product/EditProduct";
import StripeConnect from "./components/user/StripeConnect";
import ShopOrders from "./components/order/ShopOrders";
import Cart from "./components/cart/Cart";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route
        path="/user/edit/:userId"
        element={
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/:userId"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/seller/shop/new"
        element={
          <PrivateRoute>
            <NewShop />
          </PrivateRoute>
        }
      />
      <Route
        path="/seller/shop/edit/:shopId"
        element={
          <PrivateRoute>
            <EditShop />
          </PrivateRoute>
        }
      />
      <Route path="/shops/all" element={<Shops />} />
      <Route
        path="/seller/shops"
        element={
          <PrivateRoute>
            <MyShops />
          </PrivateRoute>
        }
      />

      <Route
        path="/seller/:shopId/products/new"
        element={
          <PrivateRoute>
            <NewProduct />
          </PrivateRoute>
        }
      />
      <Route path="/product/:productId" element={<Product />} />
      <Route
        path="/seller/:shopId/:productId/edit"
        element={
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        }
      />

      <Route path="/cart" element={<Cart />} />
      <Route path="/seller/stripe/connect" element={<StripeConnect />} />

      <Route
        path="/seller/orders/:shop/:shopId"
        element={
          <PrivateRoute>
            <ShopOrders />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default MainRouter;
