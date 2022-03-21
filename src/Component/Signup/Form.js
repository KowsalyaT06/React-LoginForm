import { Grid, Paper, TextField, Button } from '@mui/material';
import { Navigate, useNavigate } from "react-router-dom";
import { validEmail, validPassword } from "./Emailvalidate";
import React, { useState } from "react";
import Popup from './Popup'



const Form = () => {
    let navigate = useNavigate();
    const [inputs, setInput] = useState({ firstname: "", Lastname: "", Mobile: "", email: "", password: "", confirmpassword: "" });


    const [errorMessage, seterrorMessage] = useState('');
    const [errorPass, seterrorPass] = useState('');
    const [errorconfirmPass, seterrorConfirmPass] = useState('');


    const handleChange = (e) => {

        setInput({ ...inputs, [e.target.name]: e.target.value, })
    }
    const submit = (e) => {


        e.preventDefault();
        // setPopup(!popup)
        // console.log(popup)
        // setSuccessMessage('')
        if (!validEmail(inputs.email))
            return seterrorMessage('Please enter valid email');
        if (!validPassword(inputs.password))
            return seterrorPass('Password should have 8 minimum characters');
        if (inputs.confirmpassword !== inputs.password)
            return seterrorConfirmPass('Password mismatch')

        navigate('/Login')

        let dataStore = localStorage.getItem('datas')
        if (dataStore) {
            let localData = JSON.parse(dataStore)
            localData.push(inputs)
            localStorage.setItem('datas', JSON.stringify(localData))

        }
        else {
            localStorage.setItem('datas', JSON.stringify([inputs]))

        }

    }
    return (
        <>

            <Grid align='center'>
                < Paper elevation={6} style={{ padding: '30px 20px', width: 300, margin: '20px auto', backgroundColor: 'whitesmoke' }
                }>


                    <h2>Sign Up</h2>

                    <form >
                        {/* //fname */}
                        <TextField label="First Name" variant="standard" name='firstname' placeholder='Enter your Name' value={inputs.firstname} onChange={handleChange} />

                        {/* Lname */}
                        <TextField label="Last Name" variant="standard" name='Lastname' placeholder='Enter you last Name' value={inputs.Lastname} onChange={handleChange} />

                        {/* mobile */}
                        <TextField label="Phone Number" variant="standard" placeholder='Enter your phone number' value={inputs.Mobile} name='Mobile' onChange={handleChange} />

                        {/* email */}
                        <TextField label="Email" type='email' value={inputs.email} placeholder='abc@g.com' variant="standard" name='email' onChange={handleChange} />
                        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

                        {/* password */}
                        <TextField label="Password" type='password' name='password' variant="standard" value={inputs.password} placeholder='Enter your password' onChange={handleChange} />
                        {errorPass && <div style={{ color: 'red' }}>{errorPass}</div>}

                        {/* confirmPass */}
                        <TextField type='password' label="Confirm Password" name='confirmpassword' variant="standard" placeholder='Enter your confirm password' value={inputs.confirmpassword} onChange={handleChange} />
                        {errorconfirmPass && <div style={{ color: 'red' }}>{errorconfirmPass}</div>}

                        <Button type='submit' variant='contained' color='primary' onClick={submit} style={{ margin: '10px' }}>submit</Button>

                    </form>

                </Paper >
            </Grid >
            <Popup />
        </>
    );
}
export default Form;