import { Box, TextField, Stack, Button, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const SignUp = ()=>{
    const API_URL = process.env.REACT_APP_API_URL;
    console.log("Api: ", API_URL)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signups = async ()=>{
    const res = await fetch(`${API_URL}/SignUp`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email, password})
    })

    }
    console.log("email: ", email, "password: ", password)
    return(<Box sx={{mt:2}}>
        <Stack sx={{gap:3}}>
           <Typography variant="h3">Welcome to TodoApp</Typography>
            <Box sx={{display:"flex", justifyContent: "center", gap:2}}>
        <TextField type="text" placeholder="First Name"></TextField>
        <TextField type="text" placeholder="Second Name"></TextField>
        </Box>
        <Box><TextField type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></TextField></Box>
        <Box><TextField type="phone" placeholder="Phone"></TextField></Box>
        <Box><TextField type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></TextField></Box>
        <Box><Button onClick={signups}>Sign Up</Button></Box>
        </Stack>
    </Box>)
}
export default SignUp