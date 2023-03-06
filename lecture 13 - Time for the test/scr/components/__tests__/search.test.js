import "@testing-library/jest-dom"
import Body from "../Body"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_DATA } from "../../mocks/data"



global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => { return Promise.resolve(RESTAURANT_DATA) }
    })
})

test("shimmer should load on home page", () => {

    const body = render(

        <StaticRouter>

            <Provider store={store}>
                <Body />
            </Provider>

        </StaticRouter>

    );
    const shimmer = body.getByTestId("shimmer")

    expect(shimmer.children.length).toBe(10)
    console.log(shimmer)


})

