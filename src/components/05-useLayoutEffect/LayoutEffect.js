import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const LayoutEffect = () => {

    const { counter, increment, decrement} = useCounter(1)

    const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;
    const { data } = useFetch( url );
    const { quote } = !!data && data[0];

    const pQuote = useRef();

    const [boxSize, setBoxSize] = useState({});


    useLayoutEffect(() => {
        
        // console.log( pQuote.current.getBoundingClientRect() );
        setBoxSize( pQuote.current.getBoundingClientRect() );

        
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect | Breaking Bad Quotes</h1>
            <hr />

            <blockquote className="blockquote text-end">
                <p 
                    ref={ pQuote }
                    className="mb-3"
                >
                    { quote }
                </p>
            </blockquote>


            <pre className="mb-3">
                { JSON.stringify( boxSize, null, 3) };
            </pre>
           

            <button 
                className="btn btn-primary m-1"
                onClick={ () => decrement() }
            >
                Previous quote
            </button>
            

            <button 
                className="btn btn-primary m-1"
                onClick={ () => increment() }
            >
                Next quote
            </button>
            


        </div>
    )
}
