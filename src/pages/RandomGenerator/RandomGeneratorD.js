let RandomGeneratorD= (max) => {
    let min=2;

    if(min>max){
        min=1;
        return (Math.floor(Math.random() * (max - min)) + min);
    }
    
    return (Math.floor(Math.random() * (max - min)) + min);
}


export default RandomGeneratorD;