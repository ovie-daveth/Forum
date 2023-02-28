import React from 'react'

const Nav = () => {

    const signout = () =>{
        console.log("user is logged out")
    }
  return (
    <nav className=' flex justify-between items-center bg-purple-800 py-2 px-2 md:px-6 text-white font-semibold'>
      <h2>Davify</h2>
      <div>
        <button className=' bg-orange-500 text-sm py-1 px-3 rounded active:bg-orange-600 hover:text-gray-200 transition ease-in-out' onClick={signout}>Sign Out</button>
      </div>
    </nav>
  )
}

export default Nav
