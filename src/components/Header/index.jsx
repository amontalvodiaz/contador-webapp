import React from "react";
import {Col, Container, Navbar, Row} from "react-bootstrap";
import {Link} from "@reach/router";

const Header = () => {
    return (<Container>
        <Row>
            <Col>
                <Navbar>
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to='/'>Logout</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>

            </Col>
        </Row>
    </Container>)
}

export default Header