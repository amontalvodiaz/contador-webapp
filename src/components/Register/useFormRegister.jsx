import {useState} from "react";
import validator from "../../modules/tools/validator";

const useFormRegister = () => {
    const [values, setValues] = useState({
        rfc:'',
        password:'',
        confirmPassword:'',
        email:''
    })

    const [errors, setErrors] = useState({})

    const handleChange = event =>{
        const {name,value} = event.target
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit = event =>{
        event.preventDefault()
        const  {errors} = validator(values)
        console.log(errors)
        setErrors(errors)
        if (!errors.hasErrors) {
            //todo logic to save login information
        }
    }
    return {handleChange, values, handleSubmit,errors}
}

export default useFormRegister