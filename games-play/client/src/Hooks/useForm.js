import { useState } from "react";


export const useForm = (initialValues, onSubmitHandler) => {

    const [values, setValues] = useState(initialValues)
console.log(initialValues)
    const onChangeHandler = (e) => {

        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }


    const onSubmit = (e) => {
        e.preventDefault()

   

        if (onSubmitHandler) onSubmitHandler(values);
        setValues(initialValues)
    }

const onChangeValues = (newValues) => {

    setValues(newValues)
}


    return {
        onSubmit, 
        values,
        onChangeHandler,
        onChangeValues
    }
}