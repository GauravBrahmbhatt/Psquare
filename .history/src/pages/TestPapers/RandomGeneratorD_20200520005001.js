let RandomGeneratorD= (max) => {
    let min=0;

    if(min>max){
        min=0;
        return (Math.floor(Math.random() * (max - min)) + min);
    }
    
    return (Math.floor(Math.random() * (max - min)) + min);
}


export default RandomGeneratorD;