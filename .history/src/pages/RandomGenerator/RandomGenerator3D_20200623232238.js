let RandomGenerator3D= (max) => {
    let min=100;

    if(min>max){
        min=1;
        return (Math.floor(Math.random() * (max - min)) + min);
    }
    
    return (Math.floor(Math.random() * (max - min)) + min);
}


export default RandomGenerator3D;