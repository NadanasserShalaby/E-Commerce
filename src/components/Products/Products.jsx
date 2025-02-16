import React, { useContext } from 'react'
import style from './Products.module.css'
import { counterContext } from '../../Context/CounterContext'
export default function Products() {
  let { setCount } = useContext(counterContext)
  function changeCount() {
    setCount(Math.random() * 100);
  }
  return (
    <div>

      <button onClick={changeCount} className='bg-orange-400 p-3'>Click me </button>
    </div>
  )
}
