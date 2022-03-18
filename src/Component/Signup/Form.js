import { Grid, Paper, TextField, Button } from '@mui/material';
import { Navigate, useNavigate } from "react-router-dom";

import React, { useState } from "react";



const Form = () => {
    let navigate=useNavigate()
    const [inputs,setInput] = useState({ firstname: "", Lastname: "", Mobile: "", email: "", password: "", confirmpassword: "" });
    // const [intialValue, setIntialValue] = useState(inputs);
    // const [mobile, setMobile] = useState('');
    // const [confirmPass, setConfirmPass] = useState('');
    // const [password, setPassword] = useState('');
    const [EmailError, setEmailError] = useState('');
    const [PasswordError, setPasswordError] = useState('');
    const [confirmPassError, setConfirmPassError] = useState('');
    const [MobileError, setMobileError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [next, setNext] = useState("move");


    const handleChange = (e) => {

        setInput({ ...inputs, [e.target.name]: e.target.value, })
    }

    //     setEmail(e.target.value)
    // }
    // const handleChange2 = (e) => {

    //     setPassword(e.target.value)
    // }
    // const handleChange3 = (e) => {
    //     setConfirmPass(e.target.value)
    // }
    // const handleChange4 = (e) => {
    //     setMobile(e.target.value)
    // }
    console.log("Email", inputs.email);



    const validate = () => {
        let checking = true
        if (inputs.email === '') {
            setEmailError('Please Enter your email');
            // checking = false
        }
        if (inputs.password === '') {
            setPasswordError('Please enter your Password');
            // checking = false
        }
        if (inputs.mobile === '') {
            setMobileError('*Mobile Number Cannot Be Blank*');
            // checking = false
        }
        if (inputs.confirmPass === '') {
            setConfirmPassError('*Please enter your Confirm password*')
            // checking = false
        }
        else {
            setSuccessMsg('Successfully validate');
            setEmailError('')
            setPasswordError('')
            setConfirmPassError('')
            setMobileError('')

        }
        // setEmail('')
        // setPassword('')
        // setConfirmPass('')
        // setMobile('')

        return checking
    }

    const submit = (e) => {
        navigate('/Login')
        e.preventDefault();

        const checking = validate()
        if (checking) {
            const Data = [{ Emails: inputs.email, Password: inputs.password }];
            localStorage.setItem("Details", JSON.stringify(Data));
            setNext(false)
        };

    }
    return (
        <>
            <Grid align='center'>
                < Paper elevation={6} style={{ padding: '30px 20px', width: 300, margin: '20px auto', backgroundColor: 'whitesmoke' }
                }>
                    <h2>Sign Up</h2>
                    {/* {
                        successMsg && <div style={{ color: "green" }}>{successMsg}
                        </div>
                    } */}

                    <form >
                        {/* //fname */}
                        <TextField label="First Name" variant="standard" name='firstname' placeholder='Enter your Name' value={inputs.firstname} onChange={handleChange} />

                        {/* Lname */}
                        <TextField label="Last Name" variant="standard" name='Lastname' placeholder='Enter you last Name' value={inputs.Lastname} onChange={handleChange} />
                        {/* mobile */}

                        <TextField label="Phone Number" variant="standard" placeholder='Enter your phone number' value={inputs.Mobile} name='Mobile' onChange={handleChange} />
                        {MobileError && <div style={{ color: 'red' }}>{MobileError}</div>}

                        {/* email */}
                        <TextField label="Email" type='email' value={inputs.email} placeholder='abc@g.com' variant="standard" name='email' onChange={handleChange} />
                        {EmailError && <div style={{ color: 'red' }}>{EmailError}</div>}

                        {/* password */}
                        <TextField label="Password" type='password' name='password' variant="standard" value={inputs.password} placeholder='Enter your password' onChange={handleChange} />
                        {PasswordError && <div style={{ color: 'red' }}>{PasswordError}</div>}

                        {/* confirmPass */}
                        <TextField type='password' label="Confirm Password" name='confirmpassword' variant="standard" placeholder='Enter your confirm password' value={inputs.confirmpassword} onChange={handleChange} />
                        {confirmPassError && <div style={{ color: 'red' }}>{confirmPassError}</div>}

                        <Button type='submit' variant='contained' color='primary' onClick={submit} style={{ margin: '10px' }}>submit</Button>

                    </form>
                    {/* <Link to="/Login">login</Link> */}
                </Paper >



            </Grid >


        </>
    );
}


export default Form;