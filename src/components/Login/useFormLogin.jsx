import {useState} from "react";
import User from "../models/User";
import validator from "../../tools/validator";

const useFormLogin = (logMeIn) =>{
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
        const  {errors} = validator(values)
        setErrors(errors)
        if (!errors.hasErrors) {
            logMeIn(new User(values.user, true))
        }
    }

return {handleChange, values, handleClick,errors}
}

export default useFormLogin