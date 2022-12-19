import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    const number = 56;
    const increaseCount = () =>{
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={increaseCount}>Click Me</button>
            <p>Count: {count}</p>
            <h1>My number: {number}</h1>
            <h2>Count: {count}</h2>
            <p><small>Double Count: {count + 2}</small></p>

        </div>
    );
};

export default Home;