## JSX
- JSX has only one parent element
- Any javascript code can run in { } in JSX

```html
<div>
    <h1>heading 1</h1>
    <h1>heading 2</h1>
</div>
```
To avoid using extra `<div>` tag we use `<React.Fragment>`
```html
<React.Fragment>
    <h1>heading 1</h1>
    <h1>heading 2</h1>
</React.Fragment>
```
or

```html
<>
    <h1>heading 1</h1>
    <h1>heading 2</h1>
</>
```
***

### Dynamic data in jsx

```js
const burgerKing = {
    name: "Burger King",
    image: "http://",
    cusins: ["Burger" , "American"],
    rating: "4.2"
}

const RestrauntCard = () => {
    return (
        <div className="card">
            <img src={burgerKing.image} />
            <h1>{burgerKing.name}</h1>
            <h2>{burgerKing.cusins}</h2>
            <h3>{burgerKing.rating} stars</h3>
        </div>
    )
}

```
***
## Config driven UI
UI which is controlled by backend is called config controlled UI. Eg. swiggy.com has different ui for different regions.
***
### Props means properties.
- passing props means passing properties
- whenever you pass a props to function component  **`<functionalComponent obj={value1}/>`** it is recieved as a parameter to the function.
***

```js
function fn(props) => {
    console.log(props.obj)
}

<fn obj={value1}/>
```
> - above code can also be written as

```js
function fn({obj}) => {
    console.log(obj)

    //you can also destructure it
    //const {value1} = obj
}

<fn obj={value1}/>

```
> - you can also pass props using spread operator like this
```js
function fn({name , cuisines , cloudinaryImageId , lastMileTravelString}){

}
//spread operator
<functionalComponent {...obj} />

```
***

## Why react is fast?
- React use something called as virtual dom, virtual dom is representation of actual dom.
- React uses Reconciliation, reconciliation is a process were we have a DIFF algorithm which finds out difference between one tree and another.
- Now that we have found the difference react will rerender only that portion
***
## why to use keys?
- Eg. if there are 3 `<div>` children of a parent and we add one more `<div>` divto it then react will get confuse and it will rerender whole tree.
- To avoid this we give unique keys to each `<div>`


