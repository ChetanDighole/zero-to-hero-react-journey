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
 * Tree shaking - removing unwanted code, like if you use 1 or 2 function from a module of 20 or 30 function bundler will remove unwanted code
 * 
 */




import React from "react"
import  ReactDOM  from "react-dom/client"


/*************************************************
 * 
 * React.createElement takes 3 arguments  1.tag , 2. object , 3.what we want to put in tag
 * 
 *
 ************************************************/

// const heading = React.createElement('h1',
//     {
//         id: 'title',
//         style:
//         {
//             color: '#134ab5',
//             backgroundColor: 'orange'
//         },
//     }
//     , "Namaste @react!!!")
// //{props} / {} : all tag attributes comes from this object 



// const heading1 = React.createElement('h1',
//     {
//         id:'heading1',
//         style: {
//             color: 'purple'
//         },
//         key:"h1",
//     },
//     "Hello from parecel"
// )
    
//     // const heading2 = React.createElement('h2',
//     // {
//     //     id:'heading2',
//     //     style: {
//     //         color: '#1d1d1d'
//     //     },
//     //     key:"h2",
//     // },
//     // "world")

//     /******************************************
//      *
//      * below code is JSX and converted as above code with the help of babel
//      *
//      * jsx => React.createElement() => object => html(DOM)
    
//      ****************************************/

// const heading2 = (
//     <h1 id="heading2" key={'h2'} style={{color:'#1d1d1d'}}>World</h1>
// )


// const root = ReactDOM.createRoot(document.getElementById('root'))
// const container = React.createElement('div', { style: { backgroundColor: 'yellow' } }, [heading1, heading2])
// root.render(container)

const Heading = (
    <h1>hello i'm react element</h1>
)



//###############################################################

// functional components

let x = 'sum of 1+2 ='

const HeadingFunction = () => {
    return (
    <div>
        {Heading}
        {/* <Heading /> */}
        { x+(1+2) }
        <h1>Hello i'm functional component</h1>
    </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)
root.render(<HeadingFunction />)