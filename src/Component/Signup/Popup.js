import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Popup = () =>{

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const onLoginFormSubmit = (e) => {
  e.preventDefault();
  handleShow();
};

return (
  <>
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Button variant="primary" onClick={handleShow}>
        Launch Form modal
      </Button>
    </div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onClick={onLoginFormSubmit} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close Modal
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}
export default Popup