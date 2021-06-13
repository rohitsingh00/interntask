import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValue = {
    email: '',
    password: ''
}
const adminUser={
    email1: "admin@namasys.co",
    password1: "admin123"
  }

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const LoginUser = () => {
    const [user, setUser] = useState(initialValue);
    const { email,password } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const Login = async() => {
        setUser({
            email: user.email,
            password:user.password
          });
        if(user.email === adminUser.email1 && user.password === adminUser.password1  ){
            history.push('./add');
          }
        else{
            toast("Invalid Details");
          }
        
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Login</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input type="email" onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input type="password" onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => Login()}>Login</Button>
                <ToastContainer />
            </FormControl>
        </FormGroup>
    )
}

export default LoginUser;