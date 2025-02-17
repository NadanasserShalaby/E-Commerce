import { useContext, useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Card from './components/Card/Card';
import Brands from './components/Brands/Brands';
import Categories from './components/Categories/Categories';
import NotFound from './components/NotFound/NotFound';
import Logout from './components/Logout/Logout';
import { tokenContext } from './Context/TokenContext'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import AuthView from './components/AuthView/AuthView'
import ProductDetails from './components/ProductDetails/ProductDetails'

function App() {
  let { setToken } = useContext(tokenContext)
  useEffect(() => {
    if (localStorage.getItem("Token")) {
      setToken(localStorage.getItem("Token"))
    }
  }, [])
  const routers = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        {
          index: true, element:
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
        },
        {
          path: "login", element:
            <AuthView>
              <Login />
            </AuthView>
        },
        {
          path: "register", element:
            <AuthView>
              <Register />
            </AuthView>
        },
        {
          path: "product", element:
            <ProtectedRoutes>
              <Products />
            </ProtectedRoutes>
        },
        {
          path: "productDetails", element:
            <ProtectedRoutes>
              <ProductDetails />
            </ProtectedRoutes>
        },
        {
          path: "card", element:
            <ProtectedRoutes>
              <Card />
            </ProtectedRoutes>
        },
        {
          path: "brand", element:
            <ProtectedRoutes>
              <Brands />
            </ProtectedRoutes>
        },
        {
          path: "categories", element:
            <ProtectedRoutes>
              <Categories />
            </ProtectedRoutes>
        },
        { path: "logout", element: <Logout /> },
        { path: "*", element: <NotFound /> },

      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
