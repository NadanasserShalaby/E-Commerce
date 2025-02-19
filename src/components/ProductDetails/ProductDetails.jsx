import React, { useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
export default function ProductDetails() {
  const [details, setDetailes] = useState(null);
  const { id } = useParams();
  console.log(id);
  function getProductDetailes() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => {
        console.log(data);
        setDetailes(data.data)

      })
      .catch(err => {
        console.log(err);

      })
  }
  useEffect(() => {
    getProductDetailes()
  }, [])
  return (
    <div className="main-layout items-center py-16">
      <div className='w-4/12'>
        <img src={details?.imageCover} alt="" />
      </div>
      <div className='w-8/12'>
        <h1>{details?.title}</h1>
        <p>{details?.description} </p>
        <span>{details?.category?.name}</span>
        <div className="flex justify-between mb-4">
          <p>{details?.price} EGP</p>
          <p>
            <i className='fa fa-star rating-color'></i>
            {details?.ratingsAverage}</p>
        </div>
        <button className=' bg-main rounded-md w-full p-2 text-center text-white'>Add to Cart</button>

      </div>
    </div>
  )
}
