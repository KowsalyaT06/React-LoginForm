import React, { useState } from "react";
import { validEmail, validPassword } from "./Emailvalidate"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button, Form } from "react-bootstrap";
function App() {
  const intial = { username: "", email: "", password: "" };
  const [input, setInput] = useState(intial);
  const [error, setError] = useState('');
  const [errorPass, seterrorPass] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const formSubmitter = (e) => {
    e.preventDefault();
    setError('');
    seterrorPass('')
    setSuccessMsg('');
    console.log(input);
    if (!validEmail(input.email))
      return setError('Your email is invalid');

    if (!validPassword(input.password))
      return seterrorPass('Your password is invalid');
 
      //successmessage
    setSuccessMsg('Successfully validate');
   

  };

  return (
    <>
      <Container>
        <h1 className="shadow-sm-text-success mt-5 p-3 text-center rounded">LOGIN FORM</h1>
        <Row className="mt-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <Form onSubmit={formSubmitter}>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" name="name" onChange={handleChange} />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
                {error.length > 0 && <div style={{ color: "red" }}>{error}
                </div>

                }
                {successMsg.length > 0 && <div style={{ color: "green" }}>{successMsg}
                </div>
                }
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                {errorPass.length > 0 && <div style={{ color: "red" }}>{errorPass}
                </div>
                }
                {successMsg.length > 0 && <div style={{ color: "green" }}>{successMsg}
                </div>
                }
              </Form.Group>


              <div className="d-grid gap-2">
                <Button variant="primary" type="submit" size="lg" >
                  LOGIN
                </Button>
              </div>

            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );

};
export default App