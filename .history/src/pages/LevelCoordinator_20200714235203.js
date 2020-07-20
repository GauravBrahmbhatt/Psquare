import React, { useState, useEffect }  from 'react';
import Level1 from "./TestPapers/level1";
import Level2 from "./TestPapers/level2";
import Level3 from "./TestPapers/level3";
import Level4 from "./TestPapers/level4";
import Level5 from "./TestPapers/level5";
import Level6 from "./TestPapers/level6";
import Level7 from "./TestPapers/level7";
import Level8 from "./TestPapers/level8";
 

const LevelCoordinator = ({ location }) => 
{
    const [ level, setLLevel ] = useState('');
    const [ abacus, setAbacus ] = useState('');
   
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      let level = null;
      let abacus = null;
      level=params.get("l");
      abacus=params.get("a");
      setLLevel(level ? level : null);
      setAbacus(abacus ? abacus : null);
      // eslint-disable-next-line
    [level,abacus]);
    
    const Level = () => {
        let condition;
        if(abacus!=null){
            condition="abacus";
        }
        else{
            condition="mental";
        }
        
        if(Number(level) === Number(1)){
            return <Level1 type={condition}/>
        }
        else if(Number(level) === Number(2)){
            return <Level2 type={condition}/>
        }
        else if(Number(level) === Number(3)){
            return <Level3 type={condition}/>
        }
        else if(Number(level) === Number(4)){
            return <Level4 type={condition}/>
        }
        else if(Number(level) === Number(5)){
            return <Level5 type={condition}/>
        }
        else if(Number(level) === Number(6)){
            return <Level6 type={condition}/>
        }
        else if(Number(level) === Number(7)){
            return <Level7 type={condition}/>
        }
        else if(Number(level) === Number(8)){
            return <Level8 type={condition}/>
        }
    }

    return (
        <div>
            {Level()}
            
        </div>
    )
}



export default LevelCoordinator;
