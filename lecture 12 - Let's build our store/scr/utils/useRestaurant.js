import { useState , useEffect } from "react";
import { FETCH_MENU_URL } from "../constant.js";

const useRestaurant = (id) => {

    const [restaurant, setRestaurant] = useState(null)

    // get data from api
    useEffect(() => {

        getrestaurantInfo()

    }, [])

    async function getrestaurantInfo() {
        const data = await fetch( FETCH_MENU_URL + id)
        const json = await data.json()
        console.log(json);
        setRestaurant(json.data)
    }


    // return restaurant data
    return restaurant
}

export default useRestaurant;
