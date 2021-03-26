import {useState} from "react";
import validator from "../../modules/tools/validator";

const useFormLogin = (logMeIn) =>{
    const [values,setValues] = useState({
        rfc:'',
        password:''
    })

    const [errors, setErrors] = useState({})

    const handleChange = event =>{
        const {name,value} = event.target
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleClick = event =>{
        event.preventDefault()
        const  {errors} = validator(values)
        setErrors(errors)
        if (!errors.hasErrors) {
            logMeIn({
                rfc: values.rfc,
                isActive: true})
        }
    }

return {handleChange, values, handleClick,errors}
}

export default useFormLogin