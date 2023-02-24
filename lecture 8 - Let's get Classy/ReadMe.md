# Let's get Classy

- If we want to add children of children like this `/about/profile` we should do:

```js
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile", ///about/profile/
                        // don't write "/profile" for children of a children.
                        element: <Profile />
                    }
                ]
            }
        ]
    }
])
```
and add `<Outlet />` in parent component i.e in about component

```js
//in about component
import {outlet} from 'react-router-dom'
const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p>This is our about us page</p>
            <Outlet />
        </div>
    )
}
export default About
```

***

## Class Components

- Class based components are just class in javascript. The most important part of class based component is `render()` method, without render() class does not work

```js
import React from 'react'

class Profilr extends React.Component {
    render()
    return (
        <h1>Hello I am a Classs</h1>
    )

}
export default Profile

// then  import it anywhere
```
## props in class base components
```js
// passing props
<Profile name={"Chetan"}>

// in profile.js

class Profile extends React.component {
    render()
    return (
        <div>
            <h1>Name: {this.props.name}</h1>
            <h1>Xyz: {this.props.xyz}</h1>
        </div>
    )
}

//use 'this' keyword

```
***
## using states in class based components

- To use state in class we need to use constructor in class.

```js
class Profile extends React.Component{
    constructor(props)
    {
    // write super(props)
    super(props);
    
    //create the state
    this.state = {
        count: 0,
        count2: 2,// making another state
    }
    }
    render()
    return (
        <>
        <h1>count: {this.state.count}</h1>
        <h1>count2: {this.state.count2}</h1>
        </>
    )
}
```
- First constructor loads then render() and then the componentDidMount() in class.

- componentDidMount() is best place to call an API

```js

this.setState({
    stateVariable: "random"
})
```
## Lecture will be continued soon ....