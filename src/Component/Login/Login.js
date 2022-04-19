import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import style from './Login.module.css'
import { createPortal } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { Modal } from 'react-bootstrap';
///import { createPortal } from "react-dom";
// import { useNavigate,Link } from "react-router-dom";
function Login() {
  let navigate = useNavigate()
  const intial = {
    username: "",
    email: "",
    password: ""
  };
  const [input, setInput] = useState(intial);

  const [popup, setPopup] = useState(false);
  const showModal = () => {
    setPopup(true);
  }
  const hideModal = () => {
    setPopup(false);
  }
  const [modal, setmodal] = useState(false);
  const isOpen = () => {
    setmodal(true);
   
  }
  const isclose = () => {
    setmodal(false);
  }
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value, })
  }

const Open = () =>{
  navigate("/Home")
}

  const formSubmitter = (e) => {
    e.preventDefault();

    let Details = localStorage.getItem("datas")
    let newDetails = JSON.parse(Details)
    let current = newDetails.find((val) => val.email === input.email && val.password === input.password)
    console.log(current)
    if (current) {
      isOpen()
   
      localStorage.setItem('currents', JSON.stringify(current))

    }
    else {
      showModal()
    }

  }

  // let navigate=useNavigate()
  return (

    < Container >
      {createPortal(
        <>

          <Modal show={popup} onHide={hideModal}>
            <Modal.Header closeButton>
              <Modal.Title>Invalid User </Modal.Title>
            </Modal.Header>
            <Modal.Body>Invalid Email or Password </Modal.Body>

          </Modal>
        </>,
        document.getElementById('modal'))}
      {createPortal(
        <>

          <Modal show={modal} onHide={isclose}>
            <Modal.Header closeButton>
              <Modal.Title>Success Message </Modal.Title>
            </Modal.Header>
            <Modal.Body>Successfully Login </Modal.Body>

            <Modal.Footer>
             
              <Button variant="primary" onClick={Open}>Continue</Button>
            </Modal.Footer>
          </Modal>

        </>,
        document.getElementById('modal'))}
      <div className={style.Full}>
        <h1 className="mt-5 p-3 text-center rounded">LOGIN FORM</h1>
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
                LOGIN
                </Button>
              </div>

            </Form>
            {/* <Link to="/Home">Home</Link> */}
          </Col>
        </Row>
      </div>
    </Container >


  );

};
export default Login