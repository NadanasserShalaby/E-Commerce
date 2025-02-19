import React, { useState } from 'react'
import style from './PopularCategories.module.css'
import axios from 'axios'
export default function PopularCategories() {
  const [categories ,setCategories] = useState([]);

  async function getCategories(){
    try{
      const {data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
      setCategories[data]
    }
    catch(error){
      console.log(error);
      
    }
  }
  return (
    <div>
      <h2>Shop Popular Categories</h2>
    </div>
  )
}
