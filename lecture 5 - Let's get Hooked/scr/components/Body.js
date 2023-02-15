import { RestaurentList  } from "../constant"
import { RestrauntCard } from "./RestrauntCard"

const Body = () =>{

    const searchTxt = "KFC"

    return(
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="search" value={searchTxt}
            //onChange
            onChange={(e)=>console.log(e.target.value)}/>
            <button className="search-btn">Search</button>
        </div>
        <div className="restraunt-list">

          {
            RestaurentList.map(restaurant => {

              return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
            })
          }
        </div>
        </>
    )
}

export default Body