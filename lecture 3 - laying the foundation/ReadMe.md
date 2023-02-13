```js
const heading2 = React.createElement('h2',
    {
        id:'heading2',
        style: {
            color: '#1d1d1d'
        },
        key:"h2",
    },
    "world")
```



> below code is JSX and converted as above code with the help of babel becoz babel understands JSX

<ins>jsx => React.createElement() => object => html(DOM)</ins>

```js
const heading2 = (
        <h1 id="heading2" key={'h2'} style={{color:'#1d1d1d'}}>World</h1>
    )
```

***
## Funtional component

below code is <ins>react element</ins>

```js
const heading = {
    < h1>hello i'm react element< /h1>
}
```

and below code is <u>functional component</u>


```js
const HeadingFunction = () => {
    return (
    <div>
        {heading} // to include react element in funct comp
        {/* <Heading /> */}
        <h1>Hello i'm functional component</h1>
    </div>
    )
}
```

root.render(heading);

root.render(< HeadingFunction/>')