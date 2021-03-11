import React, {useState} from "react";
import {Container, Row, Col, InputGroup, FormControl, Button, Alert} from "react-bootstrap";
import useFormLogin from "./useFormLogin";
import validator from "../../tools/validator";
import User from "../models/User";


const Login = ({logMeIn}) => {
    let hasErrors = false;
    const [values,setValues] = useState({
        user:'',
        password:''
    })

    const [errors, setErrors] = useState({})

    const handleChange = event =>{
        setValues({
            ...values,
            [event.target.name] : event.target.value
        })

    }

    const handleClick = event =>{
        event.preventDefault()


        let errors = {}
        const userIsRequiredMsj = "RFC es requerido"
        const passwordIsRequiredMsj = "Contraseña es requerida"
        if(!values.user.trim()){
            errors.user = userIsRequiredMsj
        }

        if(!values.password.trim()){
            errors.password = passwordIsRequiredMsj
        }
        setErrors(errors)
        for (let valuesKey in errors) {
            hasErrors = true
        }

        console.log(hasErrors)
        if (!hasErrors) {
            logMeIn(new User(values.user, true))
        }
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