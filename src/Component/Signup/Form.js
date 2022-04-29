import { Grid, Paper, TextField, Button } from '@mui/material';

import { validEmail, validPassword } from './Emailvalidate';
import React, { useState } from 'react';
import classes from './Register.module.css';

const Form = () => {
  const [inputs, setInput] = useState({
    firstname: '',
    Lastname: '',
    Mobile: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const [errorMessage, seterrorMessage] = useState('');
  const [errorPass, seterrorPass] = useState('');
  const [errorconfirmPass, seterrorConfirmPass] = useState('');

  const handleChange = (e) => {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();

    if (!validEmail(inputs.email)) return seterrorMessage('Please enter valid email');
    if (!validPassword(inputs.password))
      return seterrorPass('Password should have 8 minimum characters');
    if (inputs.confirmpassword !== inputs.password) return seterrorConfirmPass('Password mismatch');

    let dataStore = localStorage.getItem('datas');
    if (dataStore) {
      let localData = JSON.parse(dataStore);
      localData.push(inputs);
      localStorage.setItem('datas', JSON.stringify(localData));
    } else {
      localStorage.setItem('datas', JSON.stringify([inputs]));
    }
  };
  return (
    <>
      <div>
        <Grid align="center">
          <Paper elevation={6} style={{ padding: '30px 20px', width: 300, margin: '20px auto' }}>
            <h2>Sign Up</h2>

            <form className={classes.full}>
              <TextField
                label="First Name"
                variant="standard"
                name="firstname"
                placeholder="Enter your Name"
                value={inputs.firstname}
                onChange={handleChange}
              />

              <TextField
                label="Last Name"
                variant="standard"
                name="Lastname"
                placeholder="Enter you last Name"
                value={inputs.Lastname}
                onChange={handleChange}
              />

              <TextField
                label="Phone Number"
                variant="standard"
                placeholder="Enter your phone number"
                value={inputs.Mobile}
                name="Mobile"
                onChange={handleChange}
              />

              <TextField
                label="Email"
                type="email"
                value={inputs.email}
                placeholder="abc@g.com"
                variant="standard"
                data-testid="input-email"
                name="email"
                onChange={handleChange}
              />
              {errorMessage && (
                <div style={{ color: 'red' }} data-testid="mail-error">
                  {errorMessage}
                </div>
              )}

              <TextField
                label="Password"
                type="password"
                name="password"
                variant="standard"
                value={inputs.password}
                placeholder="Enter your password"
                data-testid="input-pass"
                onChange={handleChange}
              />
              {errorPass && <div style={{ color: 'red' }}>{errorPass}</div>}

              <TextField
                type="password"
                label="Confirm Password"
                name="confirmpassword"
                variant="standard"
                placeholder="Enter your confirm password"
                value={inputs.confirmpassword}
                onChange={handleChange}
              />
              {errorconfirmPass && <div style={{ color: 'red' }}>{errorconfirmPass}</div>}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={submit}
                data-testid="button"
                style={{ margin: '10px' }}>
                submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </div>
    </>
  );
};
export default Form;
