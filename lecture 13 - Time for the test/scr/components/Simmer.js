import React from 'react'

function Simmer() {
  return (
    <div className='restraunt-list' data-testid="shimmer">
      {Array(15)
        .fill("")
        .map((e , index) => (
          <div key={index} className='shimmer-card w-5 bg-gray-400'>

          </div>
        ))}
    </div>
  )
}

export default Simmer

