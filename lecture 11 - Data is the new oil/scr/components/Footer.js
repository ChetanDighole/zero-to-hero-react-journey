
import { useContext } from "react"
import UserContext from "../utils/UserContext"



const Footer = () => {

    const { user } = useContext(UserContext)

    return (
        <>
            <h4>Footer</h4>
            <h4>{user.name}</h4>
        </>
    )
}

export default Footer