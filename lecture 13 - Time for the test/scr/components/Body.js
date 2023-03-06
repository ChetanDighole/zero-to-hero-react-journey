import { useState, useEffect , useContext } from "react"
import { RestrauntCard } from "./RestrauntCard"
import Simmer from "./Simmer"
import { Link } from "react-router-dom"
import { filterData } from "../utils/helper"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext"


const Body = ({user}) => {

  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [allRestraurants, setAllRestraurants] = useState([])


  const user1 = useContext(UserContext)

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
    allRestraurants.length === 0) ? <Simmer /> : (
    <>
      <div className="search-container p-5 bg-pink-100 my-5 ">
        <input type="text" className="focus: bg-purple-500 p-2 m-2 text-white" placeholder="search" value={searchText}
          onChange={(e) =>
            setSearchText(e.target.value)} />

        <button data-testid="search-btn" className="p-2 m-2 bg-purple-600 hover:bg-purple-900 text-white rounded-md"  onClick={() => {
          const data = filterData(searchText, allRestraurants)
          setFilteredRestaurants(data)
          

        }}>search - {searchText}</button>

        <input value={user1.user.name} onChange={(e)=> user1.setUser({
          ...user,
          name:e.target.value,
          
          
        }) }/>
        <input value={user1.user.email} onChange={(e)=> user1.setUser({
          ...user,
          email:e.target.value,
          
        }) }/>

      </div>
      <div className="flex flex-wrap justify-center bg-violet-400">

        {
          filteredRestaurants.map(restaurant => {

            return (
              <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id} >
                <RestrauntCard user={user} {...restaurant.data} key={restaurant.data.id} />
              </Link>)
          })
        }
      </div>
    </>
  )
}

export default Body