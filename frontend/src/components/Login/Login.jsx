import React, { useState } from 'react'
import { IoEye } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
const Login = () => {
const [email,setEmail]=useState('')
const [password,setPassword] = useState('')
const [visible,setVisible]=useState(false)
const handleSubmit=(e)=>{
e.preventDeafult()
}

  return (
    <>
    <div className='flex justify-center items-center  h-screen bg-gray-100'>
      <div className='box-border flex flex-col justify-center items-center   rounded-lg shadow-xl shadow-black-600 w-96 h-96 bg-slate-200'>

      <div>
        <h1 className='text-center text-2xl font-bold'>
            User Login
        </h1>
      </div>
      <div>
        
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full'>
               
                <div className='flex w-full h-10 m-5 bg-sky-100 rounded-lg shadow-lg items-center'>
                    <input className='w-full focus:outline-none text-start' type='email' name='email' placeholder='   Email'autoComplete='email' required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
               <IoMdMail className='w-8 h-8 mr-5'/>
                </div>
                
               
                <div className='flex w-full h-10 bg-sky-100 rounded-lg shadow-lg items-center'>
                    <input className='w-full focus:outline-none'type={visible?"text":"password"} name='password' placeholder='   password' autoComplete='current-password' required value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                
                { visible ? (<IoEye className='w-10 h-10 mr-5' onClick={()=>setVisible(false)}/>)
                :
                (<IoEyeOffOutline className='w-10 h-10 mr-5' onClick={()=>setVisible(true)}/>)
              }
                
                </div>
                    <div className='flex mt-4'>
                        <input type="checkbox" name='remember-me'id='remember-me' />
                        <label className='ml-1 text-xs'>remember me</label>
                        <a href='#' className='text-xs text-sky-500 ml-4'>forgot password ?</a>
                    </div>
                    
                    
                    <button className='w-full bg-cyan-400 mt-5 h-10 text-xl font-bold rounded-lg shadow-lg ' type='submit' >submit</button>
                
                <div className='flex justify-evenly mt-2'>
                    <h6>
                        Not have any account?
                    </h6>
                    <Link className='text-sky-400 ml-3' to='/signup'>Sign up</Link>

                </div>
            </form>
                </div>
              </div>
        </div>
      
    
    </>
  )
}

export default Login
