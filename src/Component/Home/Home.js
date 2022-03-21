import React, { useEffect, useState } from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Nav, Table } from "react-bootstrap";

import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import './Home.css';

const Home = () => {
    const [userData, setUserData] = useState('');
    const [change, setChange] = useState([]);
    // let User = JSON.parse(localStorage.getItem('datas'))
    // console.log(User)

    useEffect(() => {
        let Users = localStorage.getItem('currents')
        let userData = JSON.parse(Users)
        setUserData(userData);

        let showData = localStorage.getItem('datas')
        let change = JSON.parse(showData)
        setChange(change)

    }, []);
    // const navigate = Navigate();
    // function Logout() {
    //     localStorage.clear();
    //     navigate.push('/Login')
    // }
    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Welcome</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/Login">Login</Nav.Link>
                        <Nav.Link href="/">Signup</Nav.Link>

                    </Nav>
                    <Nav>
                        <NavDropdown title={userData.firstname}>
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
            <div className="wel">
                <h1>Welcome</h1>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {change.map((row, index) => {
                        return (

                            <tr>
                                <td>{index + 1}</td>
                                <td>{row.firstname}</td>
                                <td>{row.Lastname}</td>
                                <td>{row.Mobile}</td>
                                <td>{row.email}</td>

                            </tr>
                        )
                    })}



                </tbody>
            </Table>
        </>
    );
}

export default Home;