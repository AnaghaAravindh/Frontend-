import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Buffer} from 'buffer'
import axios from 'axios'
 
const Certificateview = () => {

    var [certview, SetCertview] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4005/cview")
            .then(response => {
                console.log(response.data)
                SetCertview(response.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <Typography>CERTIFICATE VIEW</Typography><br></br>
            <TableContainer>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Cert id</TableCell>
                            <TableCell >SID</TableCell>
                            <TableCell >SName</TableCell>
                            <TableCell>Qualification</TableCell>
                            <TableCell>Certphoto</TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {certview.map((value, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{value._id}</TableCell>
                                    <TableCell>{value.Sid}</TableCell>
                                    <TableCell>{value.stud[0].Sname}</TableCell>
                                    <TableCell>{value.Qualification}</TableCell>
                                    <TableCell>
                                        <img src={`data:image/jpeg;base64,${Buffer.from(value.certphoto.data)}`} width="50" height="50" alt="Error"/>
                                    </TableCell>
                                   
                                </TableRow>
                            )
                        })}
                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    )
}

export default Certificateview
