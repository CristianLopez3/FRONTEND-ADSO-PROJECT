import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync
} from "@/store/user/TestReducer";

const Test = () => {
  return (
    <div className="bg-white p-10 text-black">
      <h2>Use of Redux</h2>
      <Counter />
    </div>
  );
};

export default Test;

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h2>{count}</h2>
      <div>
      <button
          className="bg-black text-white rounded-md p-2 mr-8"
          onClick={() => dispatch(incrementAsync(10))}
        >
          increment async
        </button>
        <button
          className="bg-black text-white rounded-md p-2 mr-8"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <button
          className="bg-black text-white rounded-md p-2"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
        <button
          className="bg-black text-white rounded-md p-2"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          increment by amount
        </button>
      </div>
    </div>
  );
};
