import React from 'react'
import Login from './pages/Login';
import { useState } from 'react';
import Display from './pages/Display';

function App() {
  const [isAuth, setIsAuth]=useState(localStorage.getItem("isAuth", true));
  if(!isAuth){
  return (
    <div>
      <Login setIsAuth={setIsAuth}/>
    </div>
    
  )
}
return (
  <div>
    <Display/>
  </div>
)
}
export default App;
















