import {useCount} from '../store/countStore'

export const CountDemo = () => {
  const { count, inCount, decCount, resetCount } = useCount();

  return (
    <div>
      <h1>Count - {count}</h1>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          inCount(5);
        }}
      >
        INCREMENT
      </button>
      <br />
      <button
        onClick={() => {
          decCount(5);
        }}
      >
        DECREMENT
      </button>
      <br />
      <button
        onClick={() => {
          resetCount();
        }}
      >
        RESET
      </button>
    </div>
  );
};
