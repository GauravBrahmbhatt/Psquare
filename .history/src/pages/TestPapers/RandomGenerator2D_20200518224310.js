import React from 'react';

let RandomGenerator2D= (min) => {
    let max=99;
    return (Math.floor(Math.random() * (max - min)) + min)
}


export default RandomGenerator2D;