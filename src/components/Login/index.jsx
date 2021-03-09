import React, {useState} from "react";
import {Container, Row, Col, InputGroup, FormControl, Button, Alert} from "react-bootstrap";

const Login = ({logMeIn}) => {
    const [values, setValues] = useState({
        password: '',
        user: ''
    })
    const onChangeInputHandler = (event) => {
        event.preventDefault()
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const onClickButtonHandler = event => {
        event.preventDefault()
        logMeIn(values.user,values.password)
    }

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
                            onChange={onChangeInputHandler}
                            value={values.user}
                        />
                    </InputGroup>

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
                            onChange={onChangeInputHandler}
                        />
                    </InputGroup>

                </Col>
            </Row>
            <Row className="justify-content-sm-center">
                <Col xs lg="2">
                    <Button variant="outline-info" onClick={onClickButtonHandler} block>Login</Button>
                </Col>
                <Col xs lg="2">
                    <Button href="/register" variant="outline-info" block>Register</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Login