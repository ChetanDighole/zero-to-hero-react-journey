import { IMG_CDN_URL} from "../constant"
// import UserContext from "../utils/UserContext"
// import { useContext } from "react"

export const FoodItem = ({name , description , cloudinaryImageId , price } ) => {

    // const {user} = useContext(UserContext)

    return (
        <div className="w-52 p-2 m-2 shadow-lg bg-pink-200">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-xl" >{name}</h2>
            <h3>{ description }</h3>
            <h4>rupees: {price/100}</h4>
            
        </div>
    )
}