import React from "react";



class Profile extends React.Component {

    constructor(props) {
        super(props)

        //create state
        this.state = {
            userInfo: {
                name: "dummy name",
                location: "dummy location"
            }
        }
        console.log("constructor in class");

    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ChetanDighole")

        const json = await data.json()
        this.setState({
            userInfo: json
        })
    }


    render() {
        console.log("render class");
        return (
            <div>
                <h1>Hellow class</h1>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>Location: {this.state.userInfo.bio}</h2>


                <img src={this.state.userInfo.avatar_url} />


                {/* <h2>Count: {this.state.count}</h2>
                <h2>Count2: {this.state.count2}</h2> */}
                {/* <button onClick={() => {
                    //we do not mutate state directly.
                    // we will never do this.state = something
                    this.setState({
                        count: 1
                    })
                }} >count</button> */}
            </div>
        )
    }

}

export default Profile
