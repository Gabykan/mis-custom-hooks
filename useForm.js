import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange =({target}) =>{
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]:value
        });

        console.log("desde hook", formState);
    }
    const onResetForm =() =>{
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
  }
}
