import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function ProductItem({ product, addProductToCart, loading }) {
  const { imageCover, title, category, price, ratingsAverage, id } = product;

  return (
    <div className='w-full px-2 mb-5 md:w-1/3 lg:w-1/4 sm:w-1/2'>
      <div className="bg-white rounded-lg shadow-md p-4  transition-all duration-300  transform hover:scale-105">
        <Link to={`/productDetails/${id}/${category._id}`} className="block">
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <img src={imageCover} className="w-full h-full object-cover" alt={title} />
          </div>
          <span className='text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full inline-block mt-2'>{category.name}</span>
          <h2 className='text-lg font-semibold mt-2 text-gray-800'>{title.split(" ").splice(0, 2).join(" ")}</h2>
          <div className="flex justify-between items-center my-2 text-gray-700">
            <p className="text-xl font-bold">{price} EGP</p>
            <p className="flex items-center text-yellow-500 font-semibold">
              <i className='fa fa-star mr-1'></i>
              {ratingsAverage}
            </p>
          </div>
        </Link>
        <button
          onClick={() => addProductToCart(id)}
          className={`mt-3 w-full p-3 rounded-md text-white text-lg flex items-center justify-center transition ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700  transition-all duration-300 '
          }`}
          disabled={loading}
        >
          {loading ? <AiOutlineLoading3Quarters className="animate-spin mr-2" /> : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
