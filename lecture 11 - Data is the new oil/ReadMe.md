# Data is the new oil

## useContext

```js
// to create context
import { createContext } from "react"

// name the context
const UserContext = createContext({
    user:{
        name : "Chetan",
        email: "ChetanDighole@gg.com"
    }
})
export default UserContext

```

```js
// to use context in desired location
import { useContext } from "react"
//importing our context
import UserContext from "./path"

const { user } = useContext(UserContext)

```
- this is for hard coded value

***
## useContext in class
- class does not have hooks

```js
<UserContext.Consumer>
        {
            ({user})=> <h1 className="font-bold text-xl">{user.name} & {user.email}</h1>
         }
</UserContext.Consumer>
```
***
- to use dynamic data use <userContext.Provider> and wrap around the components where you want to pass data

```js
//userContext is our created context
<userContext.Provider>
  <Home />
  <About />
</userContext.Provider>
```



