import { useState } from "react"
import { RestaurentList } from "../constant"
import { RestrauntCard } from "./RestrauntCard"


const Body = () => {

  const [searchText, setSearchText] = useState("");

  const [restaurants, setRestaurants] = useState(RestaurentList)

  

  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter(
      (restaurant) =>
        restaurant.data.name.includes(searchText))

        console.log(filterData);
        
    return filterData
  }

  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="search" value={searchText}
          //onChange
          onChange={(e) =>
            setSearchText(e.target.value)} />

        <button className="search-btn" onClick={() => {
          //need to filter the data
          const data = filterData(searchText, restaurants)
          //update the state - restaurant
          setRestaurants(data)

        }}>search - {searchText}</button>
      </div>
      <div className="restraunt-list">

        {
          restaurants.map(restaurant => {

            return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          })
        }
      </div>
    </>
  )
}

export default Body