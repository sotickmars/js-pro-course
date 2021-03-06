import React, { useState } from "react";

export const SecondComponent = ({
  counter,
  increment,
  decrement,
  plus,
  minus,
}) => {
  const [input, setInput] = useState();

  const onChange = (evt) => {
    setInput(+evt.target.value);
  };

  return (
    <div>
      <input type="number" value={input} onChange={onChange} />
      <button onClick={increment}>Inc</button>
      {counter}
      <button onClick={decrement}>Dec</button>
      <button onClick={() => plus(input)}>+</button>
      <button onClick={() => minus(input)}>-</button>
    </div>
  );
};
