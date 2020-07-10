import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      level>2 ? (<Level3 level=/>) : (<Level1/>)
  );
};

export default TestLoader;
