import React from "react";
import {Card, Col, Container, Form, Row} from "react-bootstrap";

const Profile = ({user}) => {

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header><h1>{user.name}</h1></Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Email
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="email" placeholder="Email"/>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile