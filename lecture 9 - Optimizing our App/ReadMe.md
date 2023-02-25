# optimizing our app

- Hooks are just like a normal function
- We can't use normal function instead of hooks becoz we can't use statevariable, useEffect in it.

```js
//creating a custom hook

//make a new js file and name it as use<name> just like normal hooks.

// This hoook takes id as parameter and return list of restaurant details

const useRestaurant = (id) => {

    const [restaurant, setRestaurant] = useState(null)

    // get data from api
    useEffect(() => {

        getrestaurantInfo()

    }, [])

    async function getrestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=19.0759837&lng=72.8776559&menuId=" + id)
        const json = await data.json()
        console.log(json);
        setRestaurant(json.data)
    }


    // return restaurant data
    return restaurant
}

export default useRestaurant;

```

- To use it just import it 
```js
import Restaurant from "./path"
const restaurant = useRestaurant(id)
```
***
to check if user is user is online or offline
```js
 windows.addEventListener("online" , ()=>{
    //what to do after online or offline(just change to offline)
})

// To clear eventListener
windows.removeEventListerner("offline" , function())


```

***

Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.

To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle. Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.

Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.
- Chunking
- Code Spliting
- Dynamic bundling
- Lazy Loading
- On demand loading
- Dynamic import

are all same
***
