# Time for the test

> headless browser : its like actual browser but does not have ui/view. It will have virtual dom everything but will not display anything.

## Different type of testing:
  1. Manual Testing - testing done by human.
  2. Automation Testing
        - selenium testing

  3. End to end testing - covers entire user journey.
  4. Unit testing - testing small components of the code.
  5. Integration Testing - testing of integration of different components. eg. when we search product should display.
***

install react testing library
> - npm install --save-dev @testing-library/react
> - npm i -D jest

## configure jest
> npx jest --init => typescript: no => jsdom(browser-like) => coverage: yes => intrument code for coverage: babel => auto clear mock: yes.

A jest.config.js file will be created.

> npm i -D jest-environment-jsdom.
***

- create `__tests__` folder, then create fileName.test.js files in it.

 - to run test
> npm run test
***
- config bable
> npm install --save-dev babel-jest @babel/core @babel/preset-env.

insert below code in .babelrc

>"presets": [["@babel/preset-env", {"targets": {"node": "current"}}]]
***
# Unit testing
## To test javascript
```js
//inside fileName.test.js
//import our function
import { sum } from "../sum";

//syntex to write test cases
test("check sum of 2 positive number", () => {

    expect(sum(2,5)).toBe(7);

})
```
***
## To test jsx
- install @babel/preset-react

- add below code in .babelrc

> "presets": [["@babel/preset-env", {"targets": {"node": "current"}}],
  ["@babel/preset-react", {"runtime": "automatic"}]
]
> npm i -D "@babel/preset-react"

- javascript does not recognise .png/.jpg thats why make a mock folder and add dummy photo. eg. 
```js
export default "dummy.png"
```

and add below below code to jest.config.js

>  moduleNameMapper: {
    "\\.(jpg|png|svg)$" : "../mocks/dummyLogo.js"
  },

```js

//to test logo add data-testid="logo"
//<img data-testid="logo" alt="logo" className="h-28  p-2 " src={logo} />

import { render } from "@testing-library/react"
//importing header component
import Header from "../Header"
import { Provider } from "react-redux";
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"

test("logo should load on rendering header" , () => {

//use render becoz we are rendering jsx
  const header = render(
    <StaticRouter>
            <Provider store={store} >
                <Header />
            </Provider>

        </StaticRouter>
  )

})

//below we use the logo id we given in code data-testid="logo"
const logo = header.getAllByTestId("logo")

expect(logo[0].src).toBe("http://localhost/dummy.png")

```
***
jest also don't recognise `fetech()`
```js
global.fetch = jest.fn(()=>{
  // below code is for restaurant data
    return Promise.resolve({
        json: ()=> { return Promise.resolve(RESTAURANT_DATA) }
    })
})

```

# watch last 1hr.....



