import React, { Component } from 'react';
import random2D from './RandomGenerator2D';

class level3 extends Component {

constructor() 
{
    super();
    this.state = 
    {
        count: 0,
        questions:{},
        answers: [],
        result: false,
        loadTimer: false,
    };
}


rowRandom = () => {
    //alternate positive and negative num
    //
    let i=0;
    let sum=0;
    const start=99;
    let random;
    while(i<4){
        if(sum === 0)
        {
            
            random = random2D(start);
            console.log("Random:" + random);
            sum = sum + random;
        }
        else if( i%2 === 0)
        {
            random = (random2D(sum));
            console.log("Random:" + random);
            sum = sum + random;
        }
        else
        {
            random = (-random2D(sum));
            console.log("Random:" + random);
            sum = sum + random;
        }
          

    }
    console.log(sum);

}


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default level3;
