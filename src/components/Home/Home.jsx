import React from 'react'
import style from './Home.module.css'
import RecentProduct from './components/RecentProduct/RecentProduct'
import PopularCategories from './components/PopularCategories/PopularCategories'
export default function Home() {
  return (
    <>
      <PopularCategories />
      <RecentProduct />
    </>
  )
}
