import './Counter.css';
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const btn_increment = () => setCount(count + 1);
    const btn_decrement = () => setCount(count - 1);

    return (
        <div className="counter_box">
            <div className="counter_content">
                <button onClick={btn_increment}>+</button>
                <p>{count}</p>
                <button onClick={btn_decrement}>-</button>
            </div>
        </div>
    );
}

export default Counter;