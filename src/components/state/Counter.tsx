import { useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

const initialiseState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export const Counter = () => {
  //useState is great for simple state values
  //useReducer is great for complex state object where the next state depend on the previous state (Better to use useReducer in this case)
  const [state, dispatch] = useReducer(reducer, initialiseState);

  return (
    <>
      Count : {state.count}
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 10 });
        }}
      >
        Increment 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 10 });
        }}
      >
        Decrement 10
      </button>
    </>
  );
};
 