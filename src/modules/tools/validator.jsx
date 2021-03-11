const validator = (values) => {
    let errors = {}
    const userIsRequiredMsj = "RFC es requerido"
    const passwordIsRequiredMsj = "Contraseña es requerida"
    if(!values.user.trim()){
        errors.user = userIsRequiredMsj
    }

    if(!values.password.trim()){
        errors.password = passwordIsRequiredMsj
    }
    for (let valuesKey in errors) {
        errors.hasErrors = !!valuesKey
        break
    }
    return {errors}
}

export default validator