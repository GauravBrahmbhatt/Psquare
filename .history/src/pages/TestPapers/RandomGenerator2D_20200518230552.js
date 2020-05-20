//import React from 'react';

let RandomGenerator2D= (min) => {
    let min=10;
    return (Math.floor(Math.random() * (max - min)) + min);
}


export default RandomGenerator2D;