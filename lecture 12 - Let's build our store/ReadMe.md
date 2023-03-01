# Let's build our store (redux)

- The store has number of slices.

> When we want to add a product to cart we click (+) button this will dispatch an action which calls the reducer function which will update the slice of the store. (This is for writing the store.)

> (To read from the slice of the store) When we want to read the slice we have to call the selector (this a hook) , this selector will give us the information that will update the cart component. (selecting portion of the store that's why the name selector)

***

>npm i @reduxjs/toolkit

redux core job is to manage the store, maintain the store, create slices that's why we use @reduxjs/toolkit

***
>npm i react-redux

react-redux is the bridge between react & redux
***

## creating store
```js
import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
    //create slices
})
export default store
```
***
## using store
```js
import store from "./path of our store"
import { Provider } from "react-redux"

<Provider store={store}>
// writing 'store' is imp store={anyName}
    <Home/>
    :
    :
</Provider>

```
***
## creating slice

```js
import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: ["apple" , "banana"]
    },
    reducers:{
        addItems: (state,action) => {
            // state is the initialState we created above
            // action is adta which we will recieve
            state.items.push(action.payload)
        },
        removeItem: (state , action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
})

export const {addItem , removeItem , clearItem} = cartSlice.actions;

export default cartSlice.reducer

```
***
## puting slice in store

```js
import cartslice from "./cartSlice"

const store = configureStore({
    reducer: {

        //name of slice : cartSlice
        cart : cartSlice
    }
})

```
***

## useSelector()

```js
const cartItem = useSelector(store => store.cart.items)
// be specific to what you want in store like above as we specifically accessing items.
// if we do this useSelector(store => store) this will re render the component every time store gets updated don't do this

```
***
## useDispatch()
```js
import { useDispatch } from 'react-redux'

const dispatch = useDispatch()

const handleClick = () => {
    //addItem is reduser we created
    dispatch(addItems("grape"))
}

onClick(()=>handleClick())
```
