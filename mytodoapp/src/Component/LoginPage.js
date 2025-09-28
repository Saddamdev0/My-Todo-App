import React from "react";
import {Box, TextField, Typography, Stack, Button} from "@mui/material"
const LoginPage = () =>{
    return(
        <Box>
            <Typography variant="h3">Welcome to Todo App</Typography>
            <Stack sx={{alignItems: 'center', gap:2}}>
            <TextField placeholder="Email"></TextField>
            <TextField placeholder="Password"></TextField>
            <Button>Login</Button>
            <Typography>New to TodoApp? <Button>Sign Up</Button></Typography>
            </Stack>
            
        </Box>
    )
}
export default LoginPage