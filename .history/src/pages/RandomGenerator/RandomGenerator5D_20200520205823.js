let RandomGenerator4D= (max) => {
    let min=10000;

    if(min>max){
        min=0;
        return (Math.floor(Math.random() * (max - min)) + min);
    }
    
    return (Math.floor(Math.random() * (max - min)) + min);
}


export default RandomGenerator4D;