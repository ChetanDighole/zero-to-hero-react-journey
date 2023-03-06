import { IMG_CDN_URL} from "../constant"
import UserContext from "../utils/UserContext"
import { useContext } from "react"

export const RestrauntCard = ({name , cuisines , cloudinaryImageId , lastMileTravelString } ) => {

    const {user} = useContext(UserContext)

    return (
        <div className="w-52 p-2 m-2 shadow-lg bg-pink-200">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-xl" >{name}</h2>
            <h3>{cuisines.join(" , ") }</h3>
            <h4>{user.name} , {user.email}</h4>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}