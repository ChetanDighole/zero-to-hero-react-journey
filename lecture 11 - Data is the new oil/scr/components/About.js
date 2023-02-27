import { Outlet } from "react-router-dom"
import Profile from "./ProfileClass"
import ProfileFunctionComponent from "./Profile"
import { Component } from 'react'
import UserContext from "../utils/UserContext";

// const About2 = () => {
//     return (
//         <div>
//             <h1>About Us Page</h1>
//             <p>This is our about us page</p>
//             <ProfileFunctionComponent name={"Chetan"} />

//             <Profile name={"Dighole"} xyz={"xyz"}/>
//         </div>
//     )
// }

class About extends Component{

    constructor(props){
        super(props);

        console.log("Parent Constructor");



    }

    componentDidMount(){
        console.log("Parent componentdidMount");
    }

    render(){

        console.log("Parent render");

        return (
            <div>
                <h1>About Us Page</h1>

                <UserContext.Consumer>
                    {
                        ({user})=> <h1 className="font-bold text-xl">{user.name} & {user.email}</h1>
                    }
                </UserContext.Consumer>

                <p>This is our about us page</p>
                {/* <ProfileFunctionComponent name={"Chetan"} /> */}
    
                <Profile name={"Dighole"} xyz={"xyz"}/>
            </div>
        )
    }

}


export default About
