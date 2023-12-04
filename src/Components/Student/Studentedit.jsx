import { Update } from '@mui/icons-material'
import { TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Studentedit = (props) => {
    var[inputs,SetInputs]=useState(props.data)

const navigate =useNavigate();


const inputhandler =(event)=>{
    const {name,value}=event.target
    SetInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
}  
 const saveData =()=>{
    
    if
    (props.method==="put")
    {
        axios.put("http://localhost:4005/sedit/"+inputs._id,inputs)
        .then((response)=>{
            alert("updated")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }
 }
 
    return (
        <div>
            <h1 className='clr'>Registration Form</h1>
            <TextField label="Admission Number" name="Admno" value={inputs.Admno} onChange={inputhandler}/>
            <br></br>
            <br></br>
            <TextField label="Name" name="Sname" value={inputs.Sname} onChange={inputhandler}/>
            <br></br>
            <br></br>
            <TextField label="Age" name="Age" value={inputs.Age} onChange={inputhandler}/>
            <br></br>
            status &nbsp;&nbsp;&nbsp;
            <select name="Status" value={inputs.Status} onChange={inputhandler}>
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
            </select>
            <br></br>
            <button onClick={saveData} >SUBMIT</button>
        </div>

        
    )
 
}

export default Studentedit
