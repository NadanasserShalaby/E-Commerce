import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
    <>
      <footer className='text-[#d1d5db]  bg-[rgb(242,242,242)]  bottom-0 p-6'>
        <div className="container mx-auto  w-full ">
          <h2 className='text-3xl text-[#212529]'>Get the freshCart App</h2>
          <p className='text-[#6d767e] font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, reiciendis et quis rem animi vero in dolores! Aliquam, sed veniam delectus magnam cupiditate ipsum quos repellat inventore ullam maxime eum.</p>
          <div className="flex gap-2">
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
          <button className='bg-[#0AAD0A] text-white rounded-md'>Share App Link</button>
          </div>


        <div className="partner flex justify-between">
          <div className="payment">
            <p>Payment partners</p>
          </div>
          <div className="app">
            <p>get with FreshCart</p>
          </div>
        </div>

        </div>
      </footer>
    </>
  )
}
