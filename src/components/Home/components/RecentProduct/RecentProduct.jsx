import React, { useEffect, useState } from 'react'
import style from './RecentProduct.module.css'
import axios from 'axios'
import ProductItem from '../../../Shared/ProductItem/ProductItem';
import Loader from '../../../Shared/Loader/Loader';
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
    <>
    {product.length != 0 && <div className='main-layout mb-8'>
      
      {product.map(prod => <ProductItem key = {product.id} product={prod} />) }

    </div>}
    {product.length == 0 && <Loader />}
    </>

  )
}
