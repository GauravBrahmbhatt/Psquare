let RandomGenerator5D= (max) => {
    let min=10000;

    if(min>max){
        min=1;
        return (Math.floor(Math.random() * (max - min)) + min);
    }
    
    return (Math.floor(Math.random() * (max - min)) + min);
}


export default RandomGenerator5D;