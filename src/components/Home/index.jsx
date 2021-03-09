import React,{Suspense} from "react";
import {Col, Container, Row} from "react-bootstrap";


const Home = ({user}) =>{
    console.log("Home " + user.rfc)
    return (
        <Container>

            <Row>
                <Col>this is Home</Col>
            </Row>
        </Container>
    )
}

export default Home