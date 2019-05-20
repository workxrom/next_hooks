import { useState } from 'react';

const Increment = () => {
  const [count, setCount] = useState(0);

  const onClick = () => setCount(count + 1);

  return (
    <div>
      <h1>`count = ${count}`</h1>
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export { Increment };
