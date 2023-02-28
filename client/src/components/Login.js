import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const navigate = useNavigate()
  function login(){
    fetch("http://localhost:4000/api/login", {
      method: 'POST',
      body: JSON.stringify({
        Email,
        Password
      }),
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((res) => res.json())
    .then((data)=>{
      if(data.error_message){
        alert(data.error_message);
      } else {
        alert(data.message);
        navigate('/home')
        localStorage.setItem("_id", data.id)
      }
    })
    .catch((err) => console.error(err));
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    login()
    setEmail('')
    setPassword('')

  }
  return (
    <div className="w-full md:w-[50%] m-auto p-5 md:mt-6 h-screen md:h-auto">
      <h2 className=' text-center text-black font-semibold text-2xl'>Please Log into your account</h2>
      <div className=' flex flex-col gap-3 items-start justify-start'>
      
          <form onSubmit={handleSubmit} className=' flex flex-col gap-5 w-full'>
            <div className=' flex flex-col'>
              <label className=' text-xl text-black font-medium' htmlFor="email">Email</label>
              <input  className=" py-2 rounded px-3 shadow-lg text-lg text-gray-400 border border-gray-400 placeholder:text-gray-400 focus:bg-gray-100 focus:outline-none " type="email" id="email" placeholder='johndoe@gmail.com' 
               value={Email}
               onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=' flex flex-col'>
              <label className=' text-xl text-black font-medium'  htmlFor="password">Password</label>
              <input className=" py-2 rounded px-3 shadow-lg text-lg text-gray-400 border border-gray-400 placeholder:text-gray-400 focus:bg-gray-100 focus:outline-none" type="password" id="password" placeholder='Enter your Password' 
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className=' bg-purple-800 md:w-[30%] py-2 rounded text-white font-semibold text-lg shadow-lg active:bg-blue-800 ' type="submit">Sign In</button>
          </form>
          <p className=' text-black font-medium'>Don't have an account? <Link className=' hover:text-red-700 cursor-pointer' to='/register'> Create here</Link></p>
      </div>
     
    </div>
  )
}

export default Login
