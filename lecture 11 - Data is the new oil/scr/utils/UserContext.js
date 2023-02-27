
import { createContext } from "react";


const UserContext = createContext({
    user:{
        name : "Chetan",
        email: "ChetanDighole@gg.com"
    }
})

export default UserContext

