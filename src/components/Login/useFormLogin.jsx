import {useState,useEffect} from "react";
import User from "../models/User";

const useFormLogin = (validate,logMeIn) =>{
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
        setErrors(validate(values))
        console.log(errors.hasErrors)
        if (!errors.hasErrors) {
             //logMeIn(new User(values.user, true))
        }
    }

return {handleChange, values, handleClick,errors}
}

export default useFormLogin