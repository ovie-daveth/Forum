import React, { useState } from 'react'


const Replies = () => {

  const [reply, setReply] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ reply })
    setReply(" ")
  }

  return <div className=' mt-6 px-5 md:w-[50%] w-full m-auto'>
    <form className=" flex flex-col gap-3" onSubmit={handleSubmit}>
        <label className=' text-lg font-semibold' htmlFor='reply'>Reply to this thread</label>
        <textarea 
        rows={3}
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        type="text"
        name="reply"
        className=' border border-gray-500 focus:outline-blue-500 text-gray-500 px-2'
        />
        <button className=' shadow-md w-full md:w-[30%] bg-blue-700 py-2 rounded text-white font-medium active:bg-blue-800'>SEND</button>
    </form>
  </div>


}

export default Replies
