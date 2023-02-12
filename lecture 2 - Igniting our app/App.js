/*********** PARCEL_does_following _things: **********
 * 
 *  HMR - hot module replacement
 * 
 *  Bundling
 * 
 * minify our app
 * 
 * clean our code
 * 
 * Dev and production build
 * 
 * super fast build algorithm
 * 
 * Image optimization
 * 
 * caching while developments
 * 
 * Compression
 * 
 * Compatible with older version of browser
 * 
 * HTTPS on dev
 * 
 * consistent hashing algorithm
 * 
 * zero config
 * 
 */




import React from "react"
import  ReactDOM  from "react-dom/client"


const root = ReactDOM.createRoot(document.getElementById('root'))

//React.createElement takes 3 arguments  1.tag , 2. object , 3.what we want to put in tag
const heading = React.createElement('h1',
    {
        id: 'title',
        style:
        {
            color: '#134ab5',
            backgroundColor: 'orange'
        },
    }
    , "Namaste @react!!!")
//{props} / {} : all tag attributes comes from this object 



const heading1 = React.createElement('h1',
    {
        id:'heading1',
        style: {
            color: 'purple'
        }
    },
    "Hello from parecel"
    )
    
    const heading2 = React.createElement('h2',
    {
        id:'heading2',
        style: {
            color: '#1d1d1d'
        }
    },
    "world")

const container = React.createElement('div', { style: { backgroundColor: 'yellow' } }, [heading1, heading2])

console.log(container);
root.render(container)
