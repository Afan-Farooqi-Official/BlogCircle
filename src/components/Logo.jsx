import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className="flex items-center justify-center space-x-3 py-2"> 
      <img className="h-16 w-16 rounded-full shadow-md" src="/logo.png" alt="BlogCircle logo" /> 
      <span className="text-2xl font-bold text-white tracking-wide"> 
        BlogCircle 
      </span> 
    </div>
  )
}

export default Logo