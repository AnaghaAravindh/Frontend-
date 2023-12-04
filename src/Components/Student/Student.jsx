import { TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Student = () => {
var[inputs,SetInputs]=useState({"Admno":'',"Sname":'',"Age":'',"Status":'ACTIVE'})

const navigate =useNavigate();


const inputhandler =(event)=>{
    const {name,value}=event.target
    SetInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
}  
 const saveData =()=>{
    axios.post("http://localhost:4005/snew",inputs)
    .then((response)=>{alert("Record saved")})
    .catch(err=>console.log(err))
    navigate('/studentview')
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

export default Student
