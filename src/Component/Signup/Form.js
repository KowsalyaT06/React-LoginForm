import { Grid, Paper, TextField, Button } from '@mui/material';
import { Navigate, useNavigate } from "react-router-dom";

import React, { useState } from "react";



const Form = () => {
    let navigate = useNavigate();
    const [inputs, setInput] = useState({ firstname: "", Lastname: "", Mobile: "", email: "", password: "", confirmpassword: "" });


    const handleChange = (e) => {

        setInput({ ...inputs, [e.target.name]: e.target.value, })
    }
    const submit = (e) => {

        navigate('/Login')
        e.preventDefault();

        // const checking = validate()
        // if (checking) {
        //const datas = [{ Emails: inputs.email, Password: inputs.password }];
        //     localStorage.setItem("Details", JSON.stringify(Data));
        //     setNext(false)
        // };

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


                            {/* email */}
                            <TextField label="Email" type='email' value={inputs.email} placeholder='abc@g.com' variant="standard" name='email' onChange={handleChange} />

                            {/* password */}
                            <TextField label="Password" type='password' name='password' variant="standard" value={inputs.password} placeholder='Enter your password' onChange={handleChange} />


                            {/* confirmPass */}
                            <TextField type='password' label="Confirm Password" name='confirmpassword' variant="standard" placeholder='Enter your confirm password' value={inputs.confirmpassword} onChange={handleChange} />

                            <Button type='submit' variant='contained' color='primary' onClick={submit} style={{ margin: '10px' }}>submit</Button>

                        </form>
                        {/* <Link to="/Login">login</Link> */}
                    </Paper >



                </Grid >


            </>
        );
    }


export default Form;