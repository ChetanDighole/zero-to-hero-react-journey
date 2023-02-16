# Let's get hooked!!

when you do
```js
export default Title
```
import it as 
```js
Import Title from "./path"
```
and

when you do
```js
export const Title
```
import it as
```js
Import {Title} from "./path"
```
***
when exporting

```js
export const title = () =>{}
export const header = () =>{}
```

```js
Import * as xyz from "./path"

<xyz.title />
<xyz.header />
//Thats why we write <React.Fragment />
```
***

- Hooks are just functions
***

# useState()
useState() hook gives us an arry of two element 1st is the state variable and other is the function which decides the value of the variable

```js
const [name , setName] = useState("Chetan")
```
when the useState variable is changed only the component in which it is used will rerender.
***
```js
onChange((e) => fun1)
//Here when there is a change in input onChange property will get triggered.
//Inside onChange fun1 function will recieve a call-back function.
```
***
# Search Functionality

```js

function searchFun(inputText , data){
    //inputText = what we have to search
    //data = in what we have to search in
    const filterData = data.filter(
        (eachElement) => eachElemnt.data.name.includes(inputText)
    )

    return filterData
}


//BigData is the data within which we have to search


//inputText is the text we will be getting from search bar onChange
const [inputText , setInputText] = useState("")

//we can't directly modify the BigData so we will store it to a variable
const [data , setData] = useState(BigData)

//creating input field to type our search
<input type="text" placeholder="search" value={inputText} 
onChange={
    (e) => setInputText(e.target.value)
}/>
//creating a search button
<button 
onClick={
    const searchedData = searchFun(inputText , data)
    setData(searchedData)
}
>search</button>

//displaying content
<div>
{
    data.map({//code to render})
}
</div>

```


