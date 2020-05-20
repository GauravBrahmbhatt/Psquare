import React from 'react'

let RandomGenerator2D= (min) => {
    return (Math.floor(Math.random() * (maximum - minimum)) + minimum)
}


export default RandomGenerator2D;