import React, { useRef } from 'react'

export const FocusScreen = () => {
    
    const inputRef = useRef();

    const handleClick = () => {
        // document.querySelector('input').select();
        console.log(inputRef);
        inputRef.current.select();
    };
    
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={ inputRef } 
                className="form-control mb-2"
                placeholder="Su nombre"
            />

            <button
                className="btn btn-outline-primary"
                onClick={ handleClick }
            >
                Focus
            </button>

        </div>
    )
}
