import React, { useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
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
    <div className="main-layout">
      <div className='w-1/4'>
        <img src="" alt="" />
      </div>
      <div className='w-3/4'>

      </div>
    </div>
  )
}
