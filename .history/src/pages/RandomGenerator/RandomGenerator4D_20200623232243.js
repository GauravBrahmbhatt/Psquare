let RandomGenerator4D= (max) => {
    let min=1000;

    if(min>max){
        min=1;
        return (Math.floor(Math.random() * (max - min)) + min);
    }
    
    return (Math.floor(Math.random() * (max - min)) + min);
}


export default RandomGenerator4D;