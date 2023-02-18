# Explore the world

- when the useState is changed the function will rerender becoz we might have used that variable manytimes.

- never use fetch() directly in react becoz whenever the compontent reload the fetch() will run.

- A component is only rendered when there is a state change and when there is props change

***
## Different ways to call api
 1. page load => call API (300 ms) => render page
 2. page load => render page (100 ms) =>call API (300 ms) => update UI (500 ms)
***

# useEffect Hook

- useEffect hook has a call-back function which is executed when the useEffect want's it to run and we will decide when will useEffect has to run by giving dependecy array.

```js
useEffect(()=>{

},[])
// this will run after initial  render of page i.e only once

useEffect(()=>{

},[stateVariable])
// this will run once after initial render and everytime stateVariable changes
```

