import React, { useContext } from 'react'
import style from './NavBar.module.css'
import logo from "../../assets/finalProject assets/images/freshcart-logo.svg"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Products from '../Products/Products'
import Categories from '../Categories/Categories'
import Brands from '../Brands/Brands'
import Home from '../Home/Home'
import Logout from './../Logout/Logout';
import Register from './../Register/Register';
import { counterContext } from '../../Context/CounterContext'
import  { tokenContext } from '../../Context/TokenContext'

export default function NavBar() {
  let {count} = useContext(counterContext);
  let {token ,setToken} = useContext(tokenContext)
  let navigate = useNavigate();
  console.log(token,"TokenNavBarrrrrrrrrrrrrrrrrrrr");
  
  console.log(count,"NONOOOOOOOOOOOOOOOOOOOOOOOOOOO");
  function logOut(){
    //- remove localStorage 
    localStorage.removeItem("Token");
    //- set Token null
    setToken(null )
    //- navigate login
    navigate("/login")
  }
  return (
    <>
    
      {/* <nav className='container m-auto'>
        <div className='flex justify-around items-center'>
          
          <div>
            <Link to="">

            <img src={logo} alt="" />
            </Link>
          </div>

          <ul className='flex justify-center items-center'>
            <li>
              <NavLink to="" className= "p-3">Home</NavLink>
            </li>
            <li>
              <NavLink to="product" className= "p-3">Products</NavLink>
            </li>
            <li>
              <NavLink to="categories" className= "p-3">Categories</NavLink>
            </li>
            <li>
              <NavLink to="brand" className= "p-3">Brands</NavLink>
            </li>
          </ul>

          <div>
            <i className='fa fa-brands fa-facebook p-2'></i>
            <i className='fa fa-brands fa-twitter p-2'></i>
            <i className='fa fa-brands fa-instagram p-2'></i>
            <i className='fa fa-brands fa-tiktok p-2'></i>
            <i className='fa fa-brands fa-linkedin p-2'></i>
            <i className='fa fa-brands fa-youtube p-2'></i>
            <i className='fa fa-brands fa-youtube p-2'></i>
            <Link to="logout">Logout</Link>

          </div>
        </div>
      </nav> */}



      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center gap-4 ">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} width={200} alt="" />
            </a>
            <div className="hidden w-full md:block  md:w-auto  absolute top-[80px] md:top-0 left-0 md:relative" id="navbar-default">
              {token? <ul className="font-medium absolute left-0 md:left-auto md:relative w-full md:w-auto flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink to={''} className="block py-2 px-3   rounded-sm    dark:text-white md:dark:text-blue-500" aria-current="page">Home</NavLink>
                </li>
                <li>
                  <NavLink to={'card'} className="block py-2 px-3 text-gray-900 rounded-sm   md:border-0   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart</NavLink>
                </li>
                <li>
                  <NavLink to={'product'} className="block py-2 px-3 text-gray-900 rounded-sm   md:border-0   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Products</NavLink>
                </li>
                <li>
                  <NavLink to={'categories'} className="block py-2 px-3 text-gray-900 rounded-sm   md:border-0   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Categories</NavLink>
                </li>
                <li>
                  <NavLink to={'brand'} className="block py-2 px-3 text-gray-900 rounded-sm   md:border-0   dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Brand</NavLink>
                </li>
              </ul> : ""}
              
            </div>
          </div>
          <div className="flex gap-3">
            <ul className='flex gap-3'>
              <li>
                <i className='fa-brands fa-facebook'></i>
              </li>
              <li>
                <i className='fa-brands fa-instagram'></i>
              </li>
              <li>
                <i className='fa-brands fa-tiktok'></i>
              </li>
              <li>
                <i className='fa-brands fa-twitter'></i>
              </li>
              <li>
                <i className='fa-brands fa-linkedin'></i>
              </li>
              <li>
                <i className='fa-brands fa-youtube'></i>
              </li>
            </ul>


            <ul className='flex gap-3'>
              {token ? <li>
                <span onClick={logOut} className='cursor-pointer'>Sinout</span>
              </li> :<>
              <li>
                <NavLink to={'register'}>Register</NavLink>
              </li>
              <li>
                <NavLink to={'login'}>Login</NavLink>
              </li>
              </> }
              
              
            </ul>
          </div>

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

        </div>
      </nav>


    </>
  )
}
