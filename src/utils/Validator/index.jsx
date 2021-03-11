import React from "react";
import {Alert} from "react-bootstrap";

const Validator = ({name,value,type,isRequired,validate}) => {
    let errors = []

    if(isRequired && (value === '' || value ==='undefined'))
        errors.push("Es necesario un valor en el campo " + name)


    switch (type){
        case 'text': if(!(value instanceof String)) errors.push(name + " debe ser solo texto")
            break
        case 'number': if(!value.match(/[0-9]/)) errors.push(name + " no son numeros")
            break
        case 'email': if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            .test(value)) errors.push("Escribe un correo valido")
            break
    }
    console.log(validate)
    if (validate)
    return (errors.map(e =><Alert variant="danger">{e} </Alert>))
    else
        return (<div/>)
}

export default Validator