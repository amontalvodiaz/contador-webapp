import React from "react";
import {Container, Row, Col, InputGroup, FormControl} from "react-bootstrap";

const Login = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="rfc">RFC</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="RFC"
                            aria-label="RFC"
                            aria-describedby="rfc"
                            />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Login