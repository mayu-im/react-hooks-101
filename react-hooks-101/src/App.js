import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount((previousCount) => previousCount + 1);
  const decrement2 = () => setCount((previousCount) => previousCount - 1);

  const doule = () => setCount((previousCount) => previousCount * 2);
  const three = () =>
    setCount((previousCount) => {
      return previousCount % 3 === 0 ? previousCount / 3 : previousCount;
    });

  const reset = () => setCount(0);

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={doule}>*2</button>
        <button onClick={three}>3の倍数のみ3で割る</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default App;
