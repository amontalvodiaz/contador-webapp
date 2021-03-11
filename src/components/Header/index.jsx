import React from "react";
import {Button, Col,  Form, FormControl, Nav, Navbar, Row} from "react-bootstrap";
import {Link,  withRouter} from "react-router-dom";

const Header = ({user,history,logout}) => {
    const show = user.isActive ? {}:{display: "none"} ;
    const onClickHandler = event => {
        event.preventDefault()
        logout()
    }
    return (<header>
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
    </header>)
}

export default withRouter(Header)