import { useState, useEffect } from "react"
import { RestaurentList } from "../constant"
import { RestrauntCard } from "./RestrauntCard"
import Shimmer from "./Simmer"


const Body = () => {

  const [searchText, setSearchText] = useState("");

  // const [restaurants, setRestaurants] = useState(RestaurentList)
  // const [restaurants, setRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  const [allRestraurants, setAllRestraurants] = useState([])



  function filterData(searchText, restaurants) {
    // console.log(restaurants);
    const filterData = restaurants.filter(
      (restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    )

    // console.log(filterData);

    return filterData
  }


  useEffect(() => {
    getRestaurants()
  }, [])



  //#########################
  /** conditional rendering
   * //if restraunt is empty => shimmer UI
   * //if restraunt has data => data UI
   * 
   */
  //#########################

  if (!allRestraurants) return null


  if (filteredRestaurants?.length == 0) return <h1>No Match found</h1>

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json()
    console.log(json);
    setAllRestraurants(json.data?.cards[2].data.data.cards)
    setFilteredRestaurants(json.data?.cards[2].data.data.cards)
  }

  console.log("render");

  return (allRestraurants.length === 0) ? <Shimmer /> : (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="search" value={searchText}
          //onChange
          onChange={(e) =>
            setSearchText(e.target.value)} />

        <button className="search-btn" onClick={() => {
          //need to filter the data
          const data = filterData(searchText, allRestraurants)
          //update the state - restaurant
          setFilteredRestaurants(data)

        }}>search - {searchText}</button>
      </div>
      <div className="restraunt-list">

        {
          filteredRestaurants.map(restaurant => {

            return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          })
        }
      </div>
    </>
  )
}

export default Body