import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RestrauntCard } from './RestrauntCard'
import { IMG_CDN_URL } from '../constant'
import Simmer from './Simmer'
import useRestaurant from '../utils/useRestaurant'
import { addItem } from '../utils/cartSlice'
import  { useDispatch } from 'react-redux'

function RestaurantMenu() {
    const { id } = useParams()

    const restaurant = useRestaurant(id)

    const dispatch = useDispatch();

    // const handleAdditem = () => {
    //     dispatch(addItem("grapes"))
    // }

    const addFoodItem = (item) => {
        dispatch(addItem(item))
    }


    return (!restaurant)? <Simmer/> : (
        <div className='flex'>
            <div>
                <h1>Restaurant id is {restaurant.id}</h1>
                <h2>{restaurant.name}</h2>
                <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
                <h3>{restaurant.area}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.avgRating}</h3>
                <h3>{restaurant.costForTwo}</h3>
            </div>

            {/* <div>
                <button className='p-2 m-5 bg-green-100' onClick={()=> handleAdditem()}>Add Items</button>
            </div> */}

            <div className='p-5'>

                <h1 className='font-bold'>Menu</h1>
                <ul>
                    {
                        Object.values(restaurant?.menu?.items).map(
                            (item)=><li key={item.id}>{item.name} - <button className='p-1 bg-green-50' onClick={()=>addFoodItem(item)}>Add</button></li>
                        )
                    }
                </ul>

            </div>
        </div>
    )
}

export default RestaurantMenu