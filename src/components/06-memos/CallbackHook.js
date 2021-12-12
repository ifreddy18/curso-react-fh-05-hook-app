import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 )

    // const increment = () => {
    //     setCounter( counter + 1);
    // };

    // useCallback regresa una version memorizada de la funcion e indica
    // que la funcion no ha cambiado si la dependencia no lo ha hecho.
    // El useCallback es una alternativa al useEffect cuando la dependencia
    // es una funcion en lugar de una variable
    const increment = useCallback( (num) => {
        // Se usa de esta manera para evitar crear una dependecia del counter
        setCounter( c => c + num )
    }, [ setCounter ] );


    return (
        <div>
            <h1>CallbackHook</h1>
            <hr />

            <h2>Counter: { counter }</h2>

            <ShowIncrement increment={ increment }/>

        </div>
    )
}
