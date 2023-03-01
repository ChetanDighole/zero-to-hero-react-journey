import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FoodItem } from "./FoodItem"
import { clearCart } from '../utils/cartSlice'

function Cart() {

  const cartItems = useSelector(store => store.cart.items)

  const dispatch = useDispatch()

  function handleClearCart() {
    dispatch(clearCart())
  }

  return (
    <div>
      <h1 className='font-bold text-3xl' >Cart Items - {cartItems.length}</h1>
      <button className='bg-green-100 p-2 m-5' onClick={()=>handleClearCart()} >Clear Cart</button>
      <div className='flex flex-wrap'>

      {
        cartItems.map((item => 
          <FoodItem {...item} key={item.id} />
          ))
      }
      </div>


    </div>
  )
}

export default Cart