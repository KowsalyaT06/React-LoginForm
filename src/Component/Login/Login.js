import React, { useState } from 'react';

import style from './Login.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button, Form, Modal } from 'react-bootstrap';

function Login() {
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [popup, setPopup] = useState(false);
  const showModal = () => {
    setPopup(true);
  };
  const hideModal = () => {
    setPopup(false);
  };
  const [modal, setmodal] = useState(false);
  const isOpen = () => {
    setmodal(true);
  };
  const isclose = () => {
    setmodal(false);
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const formSubmitter = (e) => {
    e.preventDefault();

    let Details = localStorage.getItem('datas');
    let newDetails = JSON.parse(Details);
    let current = newDetails.find(
      (val) => val.email === input.email && val.password === input.password
    );
    console.log(current);
    if (current) {
      isOpen();

      localStorage.setItem('currents', JSON.stringify(current));
    } else {
      showModal();
    }
  };

  return (
    <Container>
      <>
        <Modal show={popup} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Invalid User </Modal.Title>
          </Modal.Header>
          <Modal.Body>Invalid Email or Password </Modal.Body>
        </Modal>

        <Modal show={modal} onHide={isclose}>
          <Modal.Header closeButton>
            <Modal.Title>Success Message </Modal.Title>
          </Modal.Header>
          <Modal.Body>Successfully Login </Modal.Body>

          <Modal.Footer>
            <Button variant="primary">Continue</Button>
          </Modal.Footer>
        </Modal>

        <div className={style.Full}>
          <h1 className="mt-5 p-3 text-center rounded">LOGIN FORM</h1>
          <Row className="mt-5">
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
              <Form onSubmit={formSubmitter}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  {/* username */}
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    name="name"
                    onChange={handleChange}
                  />
                </Form.Group>
                {/* Email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    data-testid="email-input"
                    name="email"
                    onChange={handleChange}
                  />
                  {input.email && !/\S+@\S+\.\S+/.test(input.email) && (
                    <span className="error" data-testid="email-error">
                      Invalid email
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    data-testid="pass-input"
                    name="password"
                    onChange={handleChange}
                  />
                  {input.password &&
                    !/^(?=.*[A-Za-z])(?=.*d)[a-zA-Zd]{8,}$/.test(input.password) && (
                      <div className="errorpass" data-testid="error-pass" title="pass" />
                    )}
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" data-testid="button" size="lg">
                    LOGIN
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </>
    </Container>
  );
}
export default Login;
