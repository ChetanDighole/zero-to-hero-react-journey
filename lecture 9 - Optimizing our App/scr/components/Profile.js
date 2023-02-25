import React from 'react'
import { useState , useEffect } from 'react'

function Profile(props) {

  const [count , setCount] = useState(0)
  
  // useEffect(()=>{
  //   console.log("useEffect functional");
  // })

  // console.log("render");

  return (
    <div>
        <h1>Profile Functional component</h1>
        <h3>{props.name}</h3>
        <h3>count: {count}</h3>
        <button onClick={()=>setCount(1)} >count</button>
    </div>
  )
}

export default Profile
