import React from "react";
import {Alert} from "react-bootstrap";

const MessageError = ({message}) => {
    if(message){
        return (<Alert variant="danger">{message}</Alert>)
    }
    return (<div/>)
}
export default MessageError