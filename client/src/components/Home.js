import React, { useState } from 'react'
import Nav from './Nav'

const Home = () => {

  const [thread, setThread] = useState()
  return (
    <>
    <Nav />
   <main className=' w-full md:w-[50%] m-auto pt-10 px-10'>
      <h2 className=' text-black font-semibold text-center mb-5 text-lg'>
        Create a Thread
      </h2>
      <form>
        <label className=' font-medium text-sm' htmlFor="desc">Title / Description</label>
        <div className=' flex gap-3 flex-wrap items-center'>
          <input 
          className=' py-2 border border-gray-300 rounded w-full md:w-[70%] focus:border-purple-600 focus:outline-purple-500'
          type="text"
          name="thread"
          required
          value={thread}
          onChange={(e) => setThread(e.target.value)}
          />
          <button className=' bg-purple-800 text-lg text-white px-3 py-2 '>CREATE THREAD</button>
        </div>
      </form>
   </main>
    </>
  )
}

export default Home
