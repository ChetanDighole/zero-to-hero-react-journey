import { useState, useEffect } from "react"
import { RestrauntCard } from "./RestrauntCard"
import Shimmer from "./Simmer"
import { Link } from "react-router-dom"
import { filterData } from "../utils/helper"
import useOnline from "../utils/useOnline"

const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [allRestraurants, setAllRestraurants] = useState([])



  useEffect(() => {
    getRestaurants()
  }, [])


  if (!allRestraurants) return null
  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json()
    setAllRestraurants(json.data?.cards[2].data.data.cards)
    setFilteredRestaurants(json.data?.cards[2].data.data.cards)
  }


  // offline or online using custom useOnlie()
  const offline = useOnline()
  if(!offline){
    return <h1>Check your internet connection...</h1>
  }


  return (
    allRestraurants.length === 0) ? <Shimmer /> : (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="search" value={searchText}
          onChange={(e) =>
            setSearchText(e.target.value)} />

        <button className="search-btn" onClick={() => {
          const data = filterData(searchText, allRestraurants)
          setFilteredRestaurants(data)

        }}>search - {searchText}</button>
      </div>
      <div className="restraunt-list">

        {
          filteredRestaurants.map(restaurant => {

            return (
              <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id} >
                <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
              </Link>)
          })
        }
      </div>
    </>
  )
}

export default Body