import { Grid, Paper, TextField, Button } from '@mui/material';

import App from './App';

import React, { useState } from "react";



const Form = () => {
    const [email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [PasswordError, setPasswordError] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [confirmPassError, setConfirmPassError] = useState('');
    const [mobile, setMobile] = useState('');
    const [MobileError, setMobileError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const [next, setNext] = useState("move");


    const handleChange = (e) => {

        setEmail(e.target.value)
    }
    const handleChange2 = (e) => {

        setPassword(e.target.value)
    }
    const handleChange3 = (e) => {
        setConfirmPass(e.target.value)
    }
    const handleChange4 = (e) => {
        setMobile(e.target.value)
    }
    console.log("Email", email);



const validate = () => {
    let checking = true
    if (email === '') {
        setEmailError('Please Enter your email');
        checking = false
    }
    if (password === '') {
        setPasswordError('Please enter your Password');
        checking = false
    }
    if (mobile === '') {
        setMobileError('*Mobile Number Cannot Be Blank*');
        checking = false
    }
    if (confirmPass === '') {
        setConfirmPassError('*Please enter your Confirm password*')
        checking = false
    }
    else {
        setSuccessMsg('Successfully validate');
        setEmailError('')
        setPasswordError('')
        setConfirmPassError('')
        setMobileError('')

    }
    setEmail('')
    setPassword('')
    setConfirmPass('')
    setMobile('')

    return checking
}

const submit = (e) => {
    e.preventDefault();

    const checking = validate()
    if (checking) {
        const Data = { Emails: email, Password: password };
        localStorage.setItem("Details", JSON.stringify(Data));
        setNext(false)
    };

}
return (
    <>
        {
            next ? (<Grid align='center'>
                < Paper elevation={6} style={{ padding: '30px 20px', width: 300, margin: '20px auto', backgroundColor: 'whitesmoke' }
                }>
                    <h2>Sign Up</h2>
                    {
                        successMsg && <div style={{ color: "green" }}>{successMsg}
                        </div>
                    }

                    <form >
                        {/* //fname */}
                        <TextField label="First Name" variant="standard" placeholder='Enter your Name' />
                        {/* Lname */}
                        <TextField label="Last Name" variant="standard" />
                        {/* mobile */}
                        <TextField label="Phone Number" variant="standard" onChange={handleChange4} />
                        {MobileError && <div style={{ color: 'red' }}>{MobileError}</div>}


                        {/* email */}
                        <TextField label="Email" type='email' value={email} variant="standard" onChange={handleChange} />
                        {EmailError && <div style={{ color: 'red' }}>{EmailError}</div>}
                        {/* password */}
                        <TextField label="Password" type='password' variant="standard" onChange={handleChange2} />
                        {PasswordError && <div style={{ color: 'red' }}>{PasswordError}</div>}

                        {/* confirmPass */}
                        <TextField type='password' label="Confirm Password" variant="standard" onChange={handleChange3} />
                        {confirmPassError && <div style={{ color: 'red' }}>{confirmPassError}</div>}

                        <Button type='submit' variant='contained' color='primary' onClick={submit} style={{ margin: '10px' }}>submit</Button>

                    </form>
                </Paper >



            </Grid >) : <App />
        }

    </>
);
}


export default Form;