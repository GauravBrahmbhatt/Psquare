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
    
    //const Level = 
    return (
        <div>
            <div>{level}</div>
            <div></div>
            <div></div>
            
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