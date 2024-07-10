import React from 'react'
import "../styles/Login.scss"
import { FcGoogle } from "react-icons/fc";
import { auth } from '../config/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

function Login({setIsAuth}){

  const [err, setErr]=useState();

  
const  handleSubmit= async(e)=>{
    e.preventDefault();
    const email=e.target[0].value;
    const password=e.target[1].value;
    try{
    await createUserWithEmailAndPassword(auth , email, password);
setIsAuth(true);
  } catch(err){
    setErr(true);
} 
  }

  


  return (
    <div className="login">  
      
<div className="container">
    <h1> <FcGoogle/> Sign in</h1>
    <form onSubmit={handleSubmit}>
<label htmlFor="Email" >Email:</label>
<input type="email" id="email" required/>
<label htmlFor="password">Password:</label>
<input type="password" id="password" required/>
<button type="submit">Sign in</button>
{ err &&   <span>Something went Wrong</span> }
    </form>
</div>
    </div>
  )
}

export default Login;
