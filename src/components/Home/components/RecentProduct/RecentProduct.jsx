import React, { useEffect, useState } from 'react'
import style from './RecentProduct.module.css'
import axios from 'axios'
import ProductItem from '../../../Shared/ProductItem/ProductItem';
export default function RecentProduct() {
  let [product, setProduct] = useState([]);
  function getProduct() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
        console.log(data);
        setProduct(data.data)

      })
      .catch(err => {
        console.log(err);

      })
  }
  useEffect(() => {
    getProduct()
  }, [])
  return (
    <div className='flex flex-wrap gap-y-3 mv-8'>
      {product.map(prod => <ProductItem product = {prod}/> )}
    </div>
  )
}
