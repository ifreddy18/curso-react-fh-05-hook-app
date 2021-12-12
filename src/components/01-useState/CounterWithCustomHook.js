import React from "react";
import { useCounter } from "../../hooks/useCounter";
import './counter.css';

export const CounterWithCustomHook = () => {

	const { state, increment, decrement, reset } = useCounter(50)


	return (
		<>
			<h1>CounterWithHook: { state }</h1>
			<hr />

			<button 
				className="btn btn-primary"
				onClick={ () => decrement(2) }
			> - 1</button>
			<button
				className="btn btn-danger"
				onClick={ reset }
			>Reset</button>
            <button 
				className="btn btn-primary"
				onClick={ () => increment(2) }
			> + 1</button>
            

		</>
	);
};
