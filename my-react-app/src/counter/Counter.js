import React, { useState } from 'react';
import './Counter.css'

function Counter() {
    // let counter = 5;
    let [count, setCount] = useState(0)

    const addValue = () => {
        setCount(count++);
    }

    const subValue = () => {
      if(count>=0)
      setCount(count--);
    }

  return (
    <>
      <div className='container'>
        <h1>Count Increase & Decrease</h1>
        <h3>Counter value: {count}</h3>

        <button className='inc' onClick={addValue}>Increment</button>
        <button className='dec' onClick={subValue}>Decrement</button>
      </div>
    </>
  )
}

export default Counter;