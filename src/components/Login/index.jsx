import React from "react";
import {Container, Row, Col, InputGroup, FormControl, Button, Alert} from "react-bootstrap";
import useFormLogin from "./useFormLogin";


const Login = ({logMeIn}) => {
    const {handleChange, values, handleClick,errors} = useFormLogin(logMeIn)

    return (
        <Container className="justify-content-between">

            <Row className="justify-content-sm-center">
                <Col xs lg="4">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="rfc">RFC</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="RFC"
                            aria-describedby="rfc"
                            name="user"
                            onChange={handleChange}
                            value={values.user}
                        />

                    </InputGroup>
                    {errors.user && <Alert variant="danger">{errors.user} </Alert>}
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="pass">Contraseña</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="pass"
                            aria-describedby="pass"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    {errors.password && <Alert variant="danger">{errors.password} </Alert>}
                </Col>
            </Row>
            <Row className="justify-content-sm-center">
                <Col xs lg="2">
                    <Button variant="outline-info" onClick={handleClick} block>Login</Button>
                </Col>
                <Col xs lg="2">
                    <Button href="/register" variant="outline-info" block>Register</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Login