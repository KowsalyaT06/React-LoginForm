import React, { useEffect, useState } from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Nav, Table } from "react-bootstrap";

import { Container } from "react-bootstrap";
import { navigate, useNavigate } from "react-router-dom";
import classs from'./Home.module.css';

const Home = () => {
    const [userData, setUserData] = useState('');
    const [change, setChange] = useState([]);

    // let User = JSON.parse(localStorage.getItem('datas'))
    // // console.log(User)

    // function Logout() {
    //     localStorage.clear();
    //     navigate('/Login')
    // }
    useEffect(() => {
        let showData = localStorage.getItem('datas')
        let change = JSON.parse(showData)
        setChange(change)

    }, []);
    let Users = localStorage.getItem('currents')
    let userDatas = JSON.parse(Users)

    let navigate = useNavigate();
    function Logout() {
        localStorage.removeItem('currents')
        navigate('/Login')
    }
    //     localStorage.clear();
    //     navigate.push('/Login')
    // }

    return (

        <>


            {/* <Navbar bg="dark" variant="dark" expand='lg'>
                <Container >
                    <Navbar.Brand href="#home">Welcome</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/Login">Login</Nav.Link>
                        <Nav.Link href="/">Signup</Nav.Link>

                    </Nav>
                    <Nav>
                        <NavDropdown title={userDatas.firstname}>
                            <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar> */}

            <div className={classs.head}>
                <Navbar bg="success" expand="lg">
                    <Container>
                        <Navbar.Brand className="brand">HOME</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                            </Nav>
                            <Nav>
                                <NavDropdown title={userDatas.firstname} className='drop'>
                                    <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

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