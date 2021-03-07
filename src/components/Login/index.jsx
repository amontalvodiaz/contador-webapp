import React from "react";
import {Container, Row, Col, InputGroup, FormControl, Button} from "react-bootstrap";

const Login = () => {
    return(
        <Container className="justify-content-between">
            <Row className="justify-content-sm-center">
                <Col xs lg="4" >
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="rfc">RFC</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="RFC"
                            aria-describedby="rfc"
                            />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="pass">Contraseña</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="pass"
                            aria-describedby="pass"
                        />
                    </InputGroup>

                </Col>
            </Row>
            <Row className="justify-content-sm-center">
                <Col xs lg="2">
                    <Button href="/home" variant="outline-info" block>Login</Button>
                </Col>
                <Col xs lg="2">
                    <Button href="/register" variant="outline-info" block>Register</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Login