import React from 'react';
import Level1 from "./TestPapers/level1";
import Level2 from "./TestPapers/level2";
import Level3 from "./TestPapers/level3";
import Level4
 

const LevelCoordinator = ({ location }) => 
{
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