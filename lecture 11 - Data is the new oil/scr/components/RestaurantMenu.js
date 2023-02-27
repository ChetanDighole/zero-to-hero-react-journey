import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RestrauntCard } from './RestrauntCard'
import { IMG_CDN_URL } from '../constant'
import Simmer from './Simmer'
import useRestaurant from '../utils/useRestaurant'

function RestaurantMenu() {
    const { id } = useParams()

    const restaurant = useRestaurant(id)

    return (!restaurant)? <Simmer/> : (
        <div className='menu'>
            <div>
                <h1>Restaurant id is {restaurant.id}</h1>
                <h2>{restaurant.name}</h2>
                <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
                <h3>{restaurant.area}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.avgRating}</h3>
                <h3>{restaurant.costForTwo}</h3>
            </div>

            <div>

                <h1>Menu</h1>
                <ul>
                    {
                        Object.values(restaurant?.menu?.items).map(
                            (item)=><li key={item.id}>{item.name}</li>
                        )
                    }
                </ul>

            </div>
        </div>
    )
}

export default RestaurantMenu