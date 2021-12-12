import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real example ref</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

           
            <button 
                className="btn btn-info mt-5"
                onClick={ () => setShow( !show ) }
            >
                { show ? 'Hide' : 'Show'}
            </button>
        </div>
    )
}
