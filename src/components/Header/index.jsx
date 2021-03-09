import React, {useState} from "react";
import {Button, Col, Container, Form, FormControl, Nav, Navbar, Row} from "react-bootstrap";
import {Link, Redirect, withRouter} from "react-router-dom";
import User from "../models/User";

const Header = ({user,history,logout}) => {
    const show = user.isActive ? {}:{display: "none"} ;
    const onClickHandler = event => {
        event.preventDefault()
        logout()
    }
    return (<Container>
        <Row>
            <Col>
                <Navbar style={show}>
                    <Navbar.Brand href="/home" >{user.rfc}</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to='/profile'>Profile</Link>
                        </Nav.Link>
                        <Nav.Link onClick={onClickHandler}>
                          Logout
                        </Nav.Link>
                    </Nav>

                    <Navbar.Collapse className="justify-content-end">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

            </Col>
        </Row>
    </Container>)
}

export default withRouter(Header)