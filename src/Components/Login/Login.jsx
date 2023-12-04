import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import Home from '../Home/Home';

const Login = () => {
    const [un,setUn]=useState('');
    const [pwd,setPwd]=useState('');
    const[error,setError]=useState(false)
    const navigate=useNavigate();

    const Readusername=(event)=>{
        event.preventDefault();
        setUn(event.target.value);
        console.log(event.target.value);
    }
    const Readpassword=(event)=>{
        event.preventDefault();
        setPwd(event.target.value);
        console.log(event.target.value);
    }
    const Savedata=(event)=>{
        event.preventDefault();
        if(un.trim()== ''|| un.trim()=== '')
        {
          setError(true);
          return;
        }
        else
        {
            setError(false)
            navigate('')
        }

    }

      return (
    <div>
        <form>
      <h1 className='c'>Sign in</h1>
       Username:<input type="text" onChange={Readusername} name="usr" id="u1"/><br></br>
       Password:<input type="password"onChange={Readpassword} name="pas" id="p1"/><br></br>
       <input type="button"onClick={Savedata}  value="LOGIN"/>
       </form>
       {error && 'All fields must be enteres'}
    </div>
  )
}

export default Login
