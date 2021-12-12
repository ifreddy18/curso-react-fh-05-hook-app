

const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false,
}];

// Reducer desde cero
const todoReducer = ( state = initialState, action ) => {

    if ( action?.type === 'agregar') {
        return [ ...state, action.payload ];
    }

    return state;

};

let todo = todoReducer();
console.log(todo);

// Nuevo todo a agregar
const newTodo = {
    id: 2,
    todo: 'Estudiar',
    done: false,
}

// Estandar para action: Tiene type y payload
const actionAgregarToDo = {
    type: 'agregar',
    payload: newTodo,
}

todo = todoReducer( todo, actionAgregarToDo );
console.log(todo);


