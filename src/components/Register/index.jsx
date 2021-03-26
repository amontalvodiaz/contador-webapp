import React from "react";
import {Button, Col, Container, Form} from "react-bootstrap";
import useFormRegister from "./useFormRegister";
import MessageError from "../../modules/messages/getErrorMessage";

const Register = () => {
    const {handleChange,handleSubmit,values,errors} = useFormRegister()
    return (
        <Container>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="rfc">
                        <Form.Label>RFC</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="RFC con Homoclave"
                            value={values.rfc}
                            name="rfc"
                            onChange={handleChange}
                        />
                        <MessageError message={errors.rfc}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Correo @ Electronico "
                            value={values.email}
                            name="email"
                            onChange={handleChange}
                        />
                        <MessageError message={errors.email}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            value={values.password}
                            name="password"
                            onChange={handleChange}
                        />
                        <MessageError message={errors.password}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="confirm">
                        <Form.Label>Confirmar Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            value={values.confirmPassword}
                            name="confirmPassword"
                            onChange={handleChange}
                        />
                        <MessageError message={errors.confirmPassword}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="submit-button">
                        <Button
                            variant="outline-primary"
                            type="submit"
                            onClick={handleSubmit}
                        >Aceptar</Button>
                        <Button
                            variant="outline-primary"
                            href="/"
                        >Cancel</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </Container>
    )
}

export default Register