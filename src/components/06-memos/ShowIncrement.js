import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('Llamado de ShowIncrement');


    return (
        <button
            className="btn btn-primary"
            onClick={ () => increment(5) }
        >
            Incrementar
        </button>
    )
})
