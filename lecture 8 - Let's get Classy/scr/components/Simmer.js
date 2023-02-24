import React from 'react'

function Simmer() {
  return (
    <div className='restraunt-list'>
      {Array(15)
        .fill("")
        .map((e , index) => (
          <div key={index} className='shimmer-card'>

          </div>
        ))}
    </div>
  )
}

export default Simmer

