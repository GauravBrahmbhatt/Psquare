//import React from 'react';

let RandomGenerator2D= (max) => {
    let min=10;
    console.log("Minimum: " + min + " Maximum: " + max);
    if(min>max){
        min=0;
        console.log("Minimum: " + min + " Maximum: " + max);
        return (Math.floor(Math.random() * (max - min)) + min);

    }
    return (Math.floor(Math.random() * (max - min)) + min);
}


export default RandomGenerator2D;