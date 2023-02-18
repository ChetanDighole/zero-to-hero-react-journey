# Finding the path

- React says don't create component inside other  component
- Never use useState() hook in `if` `else` becoz react will unknown wether the useState variable is there or not

- Never use useState  variable in `for loop`

- use `npm formik` for forms best module

***
## npm install react-router-dom

```js
//steps to configure react-router-dom

//step 1
import {createBrowserRouter , RouterProvider} from 'react-router-dom'

const App = () => {
    return (

    )
}

//step 2 always put appRouter below APP component
const appRouter = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            errorElement: <Error />
        },
        {
            path: '/about',
            element: <About />
        }
    ]
)

//step 3 render RouterProvider
root.render(<RouterProvider router={appRouter}>)

```
***

## In Error component
- There is hook useRouteError in react-router-dom use it to display errors
```js
import {useRouteError} from 'react-router-dom'

const err = useRouteError()
//err.status
//err.statusText....
```
***

## Link tag

```js
import {Link} from 'react-router-dom

<Link to='/about'>
    <li>About</li>
</link>
```
***
## OutLet tag

```js
import {Outlet} from 'react-router-dom'

const App = () => {
    return (
        <Header />
        <Outlet /> // Everything in children goes here
        <Footer />
    )
}

const appRoute = createBrowserRouter(
    [
        {
            path: "/",
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ]
        }
    ]
)
root.render(<RouterProvider router={appRoute} />)

```

