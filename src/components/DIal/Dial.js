import React from 'react';
import Display from '../Display/Display';

const Dial = (props) => {
    return (
        <div>
            <h1>Power: {props.count}</h1>
            <Display name={props.count}></Display>
        </div>
    );
};

export default Dial;