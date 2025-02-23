import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
  let { imageCover, title, category, price, ratingsAverage, id } = props.product;

  return (
    <div className='w-100 px-2 mb-3 md:w-1/3 lg:w-1/6 sm:w-1/2'>
      <div className="product">
        <Link to={`/productDetails/${id}/${category._id}`}>
          <img src={imageCover} className='mb-2' alt="" />
          <span className='text-main'>{category.name}</span>
          <h2 className='mb-4'>{title.split(" ").splice(0, 2).join(" ")}</h2>
          <div className="flex justify-between mb-4">
            <p>{price} EGP</p>
            <p>
              <i className='fa fa-star rating-color'></i>
              {ratingsAverage}
            </p>
          </div>
        </Link>
        <button
          onClick={() => props.addProductToCart(id)}
          className='btn bg-main rounded-md w-full p-2 text-center text-white'
          disabled={props.loading} // Disable button while loading
        >
          {props.loading ? <span>Loading...</span> : <span>Add to Cart</span>}
        </button>
      </div>
    </div>
  );
}
