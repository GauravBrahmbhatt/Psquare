import React, { useState, useEffect }  from 'react';
import Level1 from "./TestPapers/level1";
import Level2 from "./TestPapers/level2";
import Level3 from "./TestPapers/level3";
import Level4 from "./TestPapers/level4";
import Level5 from "./TestPapers/level5";
import Level6 from "./TestPapers/level6";
import Level7 from "./TestPapers/level7";
 

const LevelCoordinator = ({ location }) => 
{
    const [ level, setLLevel ] = useState('');
    const [ abacus, setAbacus ] = useState('');
    const [ mental, setMental ] = useState('');
   
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const level = params.get("l");
      const abacus = params.get("a");
      const mental = params.get("m");
      //console.log(level, abacus, mental)
      setLLevel(level ? level : "1");
      setAbacus(abacus ? abacus : "1");
      setMental(mental ? mental : "1");
    }, []);
    
    const Level = () => {
        let condition;
        if(abacus!=null){
            condition="abacus";
        }
        else{
            condition="mental";
        }
        console.log(condition);
        console.log(level);
        
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
        else if(Number(level) === Number(level)){
            return <Level5 type={condition}/>
        }
        else if(Number(level) === 6){
            return <Level6 type={condition}/>
        }
        else{
            return <Level7 type={condition}/>
        }
    }

    return (
        <div>
            {Level()}
            
        </div>
    )
}



export default LevelCoordinator;


/*


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

*/