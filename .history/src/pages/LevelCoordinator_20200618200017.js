import React from 'react';
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
    const [ abacus, setAbacus ]
   
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const level = params.get("l");
      setLLevel(level ? level : "1");
    }, []);
    
    return (
        <div>
            
        </div>
    )
}

export default LevelCoordinator;


/*import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Level1 from "./PaperList/Level1List";
import Level3 from "./PaperList/Level3List";


const TestLoader = ({ location }) => {

    const [ level, setLLevel ] = useState('');
   
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const level = params.get("l");
    setLLevel(level ? level : "1");
  }, []);

  return (
      level>2 ? (<Level3 level={level}/>) : (<Level1 level={level}/>)
  );
};

export default TestLoader;*/