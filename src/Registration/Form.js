import { Grid, Paper, TextField, Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import React, { useState } from "react";
import { color } from '@mui/system';


const Form = () => {
    const [email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [PasswordError, setPasswordError] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [confirmPassError, setConfirmPassError] = useState('');
    const [mobile, setMobile] = useState('');
    const [MobileError, setMobileError] = useState('');
    const handleChange = (e) => {

        setEmail(e.target.value)
        console.log(e);
    }
    const submit = (e) => {
        e.preventDefault();
        setPasswordError('')
        if (email === '') {
            setEmailError('Please Enter your email');
        }
        if (password === '') {
            setPasswordError('Please enter your Password');
        }
        // else if (password.length<8){
        //     setPasswordError('*Password should not be less than 8 characters*')
        // }
        if (!confirmPass == password) {
            setConfirmPassError('Password Mismatch')
        }
        if (mobile === '') {
            setMobileError('*Mobile Number Cannot Be Blank*');
        }
    }
    return (

        <Grid align='center'>
            <Paper elevation={6} style={{ padding: '30px 20px', width: 300, margin: '20px auto', backgroundColor: 'whitesmoke' }}>
                <h2>Sign Up</h2>
                <form onClick={submit}>
                    <TextField id="standard-basic" label="First Name" variant="standard" placeholder='Enter your Name' />
                    <TextField id="standard-basic" label="Last Name" variant="standard" />
                    <TextField id="standard-basic" label="Phone Number" variant="standard" onChange={handleChange} />
                    {MobileError.length > 0 && <div style={{ color: 'red' }}>{MobileError}</div>}

                    <FormControl style={{ margin: '5px'}}>
                        <FormLabel id="demo-radio-buttons-group-label" >Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group" style={{display:'initial'}}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                           
                        </RadioGroup>
                    </FormControl>
                    <TextField id="standard-basic" label="Email" variant="standard" onChange={handleChange} />
                    {EmailError.length > 0 && <div style={{ color: 'red' }}>{EmailError}</div>}

                    <TextField id="standard-basic" label="Password" variant="standard" onChange={handleChange} />
                    {PasswordError.length > 0 && <div style={{ color: 'red' }}>{PasswordError}</div>}

                    <TextField id="standard-basic" label="Confirm Password" variant="standard" />
                    {confirmPassError.length > 0 && <div style={{ color: 'red' }}>{confirmPassError}</div>}
                    <Button type='submit' variant='contained' color='primary' style={{ margin: '10px' }}>submit</Button>
                </form>
            </Paper>



        </Grid>

    )
}
export default Form;