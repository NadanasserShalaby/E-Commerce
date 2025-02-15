import { useState } from 'react'
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
const routers = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "product", element: <Products /> },
      { path: "card", element: <Card /> },
      { path: "brand", element: <Brands /> },
      { path: "categories", element: <Categories /> },
      { path: "logout", element: <Logout /> },
      { path: "*", element: <NotFound /> },

    ]
  }
]);
function App() {


  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
