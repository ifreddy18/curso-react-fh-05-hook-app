import React, { memo } from 'react'

// Se llama al memo para que renderize de nuevo este componente si no ha tenido
// cambios, de esa manera se puede ahorrar consumo de memoria y datos al no
// repetir procesos innecesarios
export const Small = memo(({ value }) => {

    console.log('Small');

    return (
        <small>{ value }</small>
    )
})
