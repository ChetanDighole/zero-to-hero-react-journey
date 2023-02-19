import React from 'react'
import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { RestrauntCard } from './RestrauntCard'
import { IMG_CDN_URL } from '../constant'
import Simmer from './Simmer'


function RestaurantMenu() {
    // const params = useParams()
    const { id } = useParams()

    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {

        getrestaurantInfo()

    }, [])


    async function getrestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=19.0759837&lng=72.8776559&menuId="+ id)
        const json = await data.json()
        console.log(json);
        setRestaurant(json.data)
    }


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