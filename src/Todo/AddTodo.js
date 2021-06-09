import React, {useState} from "react";
import PropsTypes from 'prop-types'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind:{
            value: value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }

}

function AddTodo({onCreate}) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
            // setValue('')
        }
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input {...input.bind}/>
            <button type='submit'>Add todo</button>
        </form>
    )
}


AddTodo.propTypes = {
    onCreate: PropsTypes.func.isRequired
}

export default AddTodo