import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {

    const { counter, increment } = useCounter( 5000 );
    const [show, setShow] = useState(true);

    // El useMemo almacena el resultado de una funcion y la condicion que debe
    // cambiar para que se vuelva a ejecutar el proceso. Esto se hace para evitar
    // que se repita la ejecucion de procesoPesado cuando cambie algo en el 
    // componente, en lugar de simplemente esperar a que cambie el counter 
    // el cual es el que afecta el resultado de la funcion
    const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ]);

    return (
        <div>
            <h1>MemoKook</h1>
            <hr />

            <h2>Counter: <small>{ counter }</small></h2>


            {/* <p>{ procesoPesado(counter) }</p> */}
            <p>{ memoProcesoPesado }</p>

            <button
                className="btn btn-primary m-2"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary m-2"
                onClick={ () => setShow( !show ) }
            >
                Show/Hide ({ JSON.stringify( show ) })
            </button>

        </div>
    )
}
