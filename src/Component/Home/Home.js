import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavbarBrand } from "react-bootstrap";
import { Container } from "react-bootstrap";
import './Home.css';
const Home = () => {
    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Welcome</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/Login">Login</Nav.Link>
                        <Nav.Link href="/">Signup</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
            <div className="wel">
                <h1>Welcome</h1>
            </div>
        </>
    )
}
export default Home