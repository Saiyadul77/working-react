import React, { useState } from 'react';
import Dial from '../DIal/Dial';

const Mobile = () => {
    const [count, setCount] = useState(100);

    const decreaseBatteryPower = () => {
        const newCount = count - 10;
        if (newCount >= 0) {
            setCount(newCount)
        }

    }
    return (
        <div>
            <h1>Mobile Battery Power: {count}</h1>
            <button onClick={decreaseBatteryPower}>Battery Down</button>
            <Dial count={count}></Dial>

        </div>
    );
};

export default Mobile;