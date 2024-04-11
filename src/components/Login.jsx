import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  let [inputData,setInputData]=useState({})
  let navigate=useNavigate()

  let handleChange=({target:{value,name}})=>{
    setInputData({...inputData,[name]:value})
  }

  let handleSubmit=async (e)=>{
    try
    {
      e.preventDefault()
      let {data}=await axios.post(`http://localhost:5656/api/login`,inputData)
      console.log(data)
      alert(data.message)
      if(data.userAvailable)
      {
        navigate("/home")
      }
    }
    catch(err)
    {
      console.log(err.message)
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email : </label>
          <input type="email" id='email' name='email' onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="pass">Password : </label>
          <input type="password" id='pass' name='password' onChange={handleChange}/>
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
        <div>
          <p>
            Don't have an account?<Link to="/signup">Sign Up!</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
