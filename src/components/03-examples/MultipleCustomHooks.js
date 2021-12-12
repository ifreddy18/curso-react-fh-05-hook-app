import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';


export const MultipleCustomHooks = () => {

    const { counter, increment, decrement} = useCounter(1)

    const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;

    const { data, loading } = useFetch( url );
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :  
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-3">{ quote }</p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                    )
            }

            {
                ( !loading && counter > 1 ) &&    
                <button 
                    className="btn btn-primary m-1"
                    onClick={ () => decrement() }
                >
                    Previous quote
                </button>
            }

            {
                !loading &&    
                <button 
                    className="btn btn-primary m-1"
                    onClick={ () => increment() }
                >
                    Next quote
                </button>
            }
                


        </div>
    )
}
