import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Certificate = () => {
    var[inputs,SetInputs]=useState({"Sid":'',"Qualification":''})
    var [students, setStudents] = useState([]);
    var [selectedimage,Setselectedimage] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:4005/sview")
            .then(response => {
                console.log(response.data)
                setStudents(response.data)
            })
            .catch(err => console.log(err))
    },[])

    const inputhandler =(event)=>{
        const {name,value}=event.target
        SetInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
    }  



 const Handleimage= (event)=>
 {
    const file=event.target.files[0];
     Setselectedimage(file)
     inputs.certphoto = file;
}



const SaveData =()=>{
    const formdata =new FormData();
    formdata.append('Sid',inputs.Sid);
    formdata.append('Qualification',inputs.Qualification);
    formdata.append('certphoto',selectedimage)
    console.log(formdata)
    
    fetch ('http://localhost:4005/cnew',
    {method:'post',body:formdata})
    .then((response)=>response.json())
    .then((data)=>{
        alert("record saved")
         })
         .catch((err)=>{
            console.log("err")
         })
}

  return (

    <div>
       Name:<select name='Sid' value={inputs.Sid} onChange={inputhandler}>
        {
            students.map((value,index)=>{
                return(
                    <option key={index} value={value._id}>{value.Sname}</option>
                )
            })
        }
        
       </select>

       <br></br>
       Qualification:<input type='text' name='Qualification' value={inputs.Qualification} onChange={inputhandler}/>
       <br></br>
       Cerificate:<input type='file' onChange={Handleimage}/>
       <br></br>
       <button onClick={SaveData}>SUBMIT </button>
    </div>
  )
}

export default Certificate
