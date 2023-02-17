# Explore the world

- when the useState is changed the function will rerender becoz we might have used that variable manytimes.

- never use fetch() directly in react becoz whenever the compontent reload the fetch() will run.

***
## Different ways to call api
 1. page load => call API (300 ms) => render page
 2. page load => render page (100 ms) =>call API (300 ms) => update UI (500 ms)
***