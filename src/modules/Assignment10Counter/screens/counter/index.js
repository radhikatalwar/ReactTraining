import { decrementCount, incrementCount } from "./action";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";

function Counter() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counterReducer);

  return (
    <div className={"mainContainer"}>
      <h2>{`Counter: ${counter}`}</h2>
      <button
        onClick={() => {
          dispatch(incrementCount(1));
        }}
      >
        {"Increment"}
      </button>
      <button
        onClick={() => {
          dispatch(decrementCount(1));
        }}
      >
        {"Decrement"}
      </button>
    </div>
  );
}

export default Counter;
