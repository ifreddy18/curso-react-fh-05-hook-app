import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })


    useEffect(() => {

        const mouseMove = (e) => {
            const coordenadas = { x: e.x, y: e.y }
            setCoords(coordenadas);
        };

        window.addEventListener('mousemove', mouseMove );
        
        
        return () => {
            window.removeEventListener('mousemove', mouseMove );
        }
    }, [])

    return (
        <div>
            <h3>Coordenadas: ({ coords.x }, { coords.y })</h3>
        </div>
    )
}
