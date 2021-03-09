import React from "react";
import {Button, Col, Container, Form} from "react-bootstrap";

const Register = () => {
    return (
        <Container>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="rfc">
                        <Form.Label>RFC</Form.Label>
                        <Form.Control type="text" placeholder="RFC con Homoclave"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control type="email" placeholder="Correo @ Electronico "/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" value="xxx"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="confirm">
                        <Form.Label>Confirmar Contraseña</Form.Label>
                        <Form.Control type="password" value="xxx"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="submit-button">
                        <Button variant="outline-primary" type="submit">Aceptar</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </Container>
    )
}

export default Register