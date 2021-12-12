import React from 'react'
import PropTypes from 'prop-types';

import { useForm } from '../../../hooks/useForm';

export const TodoForm = ({ handleAdd }) => {
    
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        handleAdd( newTodo );
        // Reset input
        reset();

    }

    return (
        <>
            <h4>Agregar</h4>
            <hr />

            <form onSubmit={ handleSubmit }>
                
                <input
                    className="form-control"
                    type="text"
                    name="description"
                    placeholder="To do..."
                    autoComplete="off"
                    onChange={ handleInputChange }
                    value={ description }
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 w-100"
                >
                    Agregar
                </button>

            </form> 
        </>
    )
}

TodoForm.propTypes = {
    handleAdd: PropTypes.func.isRequired,
}