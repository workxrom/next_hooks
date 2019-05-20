import { useState } from 'react';

const Increment = () => {
  const [count, setCount] = useState(0);
  const [addTen, setAddTen] = useState(0);

  const onClickOne = () => setCount(count + 1);
  const onClickTen = () => setAddTen(addTen + 10);

  return (
    <div>
      <h1>`count = ${count + addTen}`</h1>
      <button onClick={onClickOne}>+1</button>
      <button onClick={onClickTen}>+10</button>
    </div>
  );
};

export { Increment };
