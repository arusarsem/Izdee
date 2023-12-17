import React from 'react'
import { database } from './Firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import {BiUser} from "react-icons/bi"
import { AiOutlineUnlock } from 'react-icons/ai'
function Signup () {

    const history = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
       const email=e.target.email.value
       const password=e.target.password.value

       createUserWithEmailAndPassword(database,email,password).then(
        data=>{console.log(data, "authData")
         history('/')
    })


    }
  return (
  

<div>
<div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{"background": "url('../src/assets/about.jpg')"}}>
<div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
<h1 className='text-4x1 text-white-font-bold text-center mb-6'>Sign Up</h1>
<form action='#' onSubmit={(e)=>handleSubmit(e)}>
<div className="relative my-4">
  <input id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
  className='block w-72 py2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' />
  <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your email</label>
  <BiUser className="absolute top-1 right-4" />
</div>

<div className="relative my-4">
  <input   id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
   className='block w-72 py2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' />
  <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your password</label>
  <AiOutlineUnlock className="absolute top-1 right-4 " />
</div >
{/* <div className="relative my-4">
  <input type="password" className='block w-72 py2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' />
  <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Confirm password</label>
  <AiOutlineUnlock className="absolute top-1 right-4" />
</div> */}
<button type="submit" className='w-full mb- text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors-duration-300'>Sign Up</button>
<div>
  <span className="m-4">Already create an account? <Link className="text-blue-500" to="/login">Sign Up</Link></span>
</div>
</form>
</div>
</div>
</div>
  )
}

export default Signup
