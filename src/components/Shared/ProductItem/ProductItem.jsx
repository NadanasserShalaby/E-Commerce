import React from 'react'
import style from './ProductItem.module.css'
import { Link } from 'react-router-dom';
export default function ProductItem(props) {
  let  {imageCover , title , category , price , ratingsAverage}= props.product
  return (
    <div className='w-1/6 px-2 mb-3'>
        <div className="product">
          <Link to={'/productDetails'}> 
          </Link>
          <img src={imageCover} className='mb-2' alt="" />
          <span className='text-main'>{category.name}</span>
          <h2 className='mb-4'>{title.split(" ").splice(0,2).join(" ")}</h2>
          <div className="flex justify-between mb-4">
            <p>{price} EGP</p>
            <p>
              <i className='fa fa-star rating-color'></i>
              {ratingsAverage}</p>
          </div>
          <button className='btn bg-main rounded-md w-full p-2 text-center text-white'>Add to Cart</button>
        </div>
      </div>
      
  )
}
