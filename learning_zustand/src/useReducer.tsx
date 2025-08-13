import type React from "react";
import { useReducer } from "react";

type State = {
	count: number;
};

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

// Initial state
const initialState: State = { count: 0 };

// Reducer function
function counterReducer(state: State, action: Action): State {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };
		case "decrement":
			return { count: state.count - 1 };
		case "reset":
			return initialState;
		default:
			return state;
	}
}

const Counter: React.FC = () => {
	const [state, dispatch] = useReducer(counterReducer, initialState);

	return (
		<div>
			<h1>Count: {state.count}</h1>
			<button type="button" onClick={() => dispatch({ type: "increment" })}>+</button>
			<button type="button" onClick={() => dispatch({ type: "decrement" })}>-</button>
			<button type="button" onClick={() => dispatch({ type: "reset" })}>Reset</button>
		</div>
	);
};

export default Counter;
