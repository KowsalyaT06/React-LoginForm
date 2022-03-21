import React, { useState } from "react";
import { ReactDOM } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './Login.css'
// import { validEmail, validPassword } from "./Emailvalidate"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { inputClasses } from "@mui/material";
// import { useNavigate,Link } from "react-router-dom";
function Login() {
  let navigate = useNavigate()
  const intial = {
    username: "",
    email: "",
    password: ""
  };
  const [input, setInput] = useState(intial);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value, })
  }


  const formSubmitter = (e) => {
    e.preventDefault();
    // const result = () => {
    //   let confirm = true


    //   if (!validEmail(input.email))
    //     return setError('Your email is invalid');
    //   confirm = false
    //   if (!validPassword(input.password))
    //     return seterrorPass('Your password is invalid');
    //   confirm = false
    //successmessage
    // setSuccessMsg('Successfully validate');

    // setInput('');
    //   return confirm
    // };
    // const results = result()
    // if (results) {
    let Details = localStorage.getItem("datas")
    let newDetails = JSON.parse(Details)
    let current = newDetails.find((val) => val.email===input.email && val.password===input.password)
    console.log(current)
    if (current) {
      alert("Successfully login")
      navigate("/Home")
      
    }
    else {
      alert("Not Successful")
    }
  }
  // let navigate=useNavigate()
  return (
    <>
      <Container>
        <h1 className="shadow-sm-text-success mt-5 p-3 text-center rounded">LOGIN FORM</h1>
        <Row className="mt-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <Form onSubmit={formSubmitter}>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                {/* username */}
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" name="name" onChange={handleChange} />

              </Form.Group>
              {/* Email */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
                {/* {error && <div style={{ color: "red" }}>{error}
                  </div>

                  }
                  {successMsg.length > 0 && <div style={{ color: "green" }}>{successMsg}
                  </div>
                  } */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                {/* {errorPass.length > 0 && <div style={{ color: "red" }}>{errorPass}
                  </div>
                  }
                  {successMsg.length > 0 && <div style={{ color: "green" }}>{successMsg}
                  </div>
                  } */}
              </Form.Group>


              <div className="d-grid gap-2">
                <Button variant="primary" type="submit" size="lg" >
                  Continue
                </Button>
              </div>

            </Form>
            {/* <Link to="/Home">Home</Link> */}
          </Col>
        </Row>
      </Container>
    </>
  );

};

export default Login