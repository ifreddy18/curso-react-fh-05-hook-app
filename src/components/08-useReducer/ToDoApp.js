import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
// import { useForm } from '../../hooks/useForm';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

import './styles.css';


// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false,
// }];

const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false,
    // }]

    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const ToDoApp = () => {
    
    // const [ todos, dispatch ] = useReducer(todoReducer, initialState);
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    // Grabar en localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [ todos ])

    const handleAdd = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo,
        })
    }

    const handleDelete = ( todoId ) => {

        const action = {
            type: 'delete',
            payload: todoId,
        }

        dispatch( action );
    }

    const handleToggle = ( todoId ) => { 
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }
    
    return (
        <div>
            <h1>ToDo App ( { todos.length } )</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <TodoList 
                        todos={ todos }
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                    />
                </div>

                <div className="col-5">
                    <TodoForm handleAdd={ handleAdd }/>
                </div>

            </div>

        </div>
    )
}
