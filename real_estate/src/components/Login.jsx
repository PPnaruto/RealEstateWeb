import React, { useState } from 'react';
import AuthAction from '../Redux/Auth/AuthAction';
import {useDispatch} from "react-redux"

const Login = () => {
    const [login,setLogin] = useState({
        email:"",
        password:""
    })
const dispatch = useDispatch();
function handleChange(e){
    setLogin({
        ...login,
        [e.target.name]:e.target.value
    })
}
function handleSubmit(e){
    e.preventDefault();
    AuthAction(login,dispatch);   
}
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter email-id' name='email' onChange={handleChange} />
            <input type="text" placeholder='Enter Password' name='password' onChange={handleChange}/>
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}

export default Login