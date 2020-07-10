//import React from 'react';

let RandomGenerator2D= (max) => {
    let min=10;

    if(min>max){
        min=1;
        return (Math.floor(Math.random() * (max - min)) + min);
    }
    
    return (Math.floor(Math.random() * (max - min)) + min);
}


export default RandomGenerator2D;

       //console.log("Minimum: " + min + " Maximum: " + max);