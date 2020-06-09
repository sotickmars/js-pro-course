import React, { setState } from "react";

export const SecondComponent = ({ counter, increment, decrement }) => {
  const [input, setInput] = setState();

  const onChange = (evt) => {
    setInput(evt.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={onChange}
        onChange={(evt) => evt.target.value}
      />
      <button onClick={increment}>Inc</button>
      {counter}
      <br />
      <button onClick={decrement}>Dec</button>
    </div>
  );
};
