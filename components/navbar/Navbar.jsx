import React from 'react'

function Navbar() {
  return (
    <>
    
      <nav>
    <div className="nav bg-blue-800 py-1 px-28 font-medium text-black "/>
        <ul className="flex justify-end bg-blue-900 ">
            <li className="mx-4 py-2 font-bold cursor-pointer hover:font-bold hover:text-opacity-90 hover:text-green-400">Home</li>
            <li className="mx-4 py-2 font-bold cursor-pointer hover:font-bold hover:text-opacity-90 hover:text-green-400">About</li>
            <li className="mx-4 py-2 font-bold cursor-pointer hover:font-bold hover:text-opacity-90 hover:text-green-400">Contact</li>
            <i className="fa-solid fa-shield-heart"></i>
        </ul>
        
    </nav>
        <div className="make">
        <h1 id="Intro"> Welcome to this webpage</h1>
        <h2>Hello World</h2>
        </div>
    
    
    </>
  )
}

export default Navbar
