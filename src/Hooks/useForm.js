import React from 'react'

const types = {

    email: {
        
        regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "O e-mail digitado é inválido!"
    }
}

const useForm = (type) => {

    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState(null);

    const validate = (value) => {

        if(!types[type].regex.test(value) && types[type]){
            
            setError(types[type].message);
            return false;
        }

        setError(null);
        return true;

    }

    const onChange = (e) => {

        setError(null);
        setValue(e.target.value);
    }

    const onBlur = () => {

        validate(value);
    }

    return {

        validate: () => validate(value),
        onChange,
        onBlur,
        error,
        value,
        setValue
    }
}

export default useForm