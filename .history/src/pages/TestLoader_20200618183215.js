import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import


const TestLoader = ({ location }) => {

    const [ level, setLLevel ] = useState('');
   
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const level = params.get("l");
    setLLevel(level ? level : "1");
  }, []);

  return (
      level>2 ? () : ()

   
  );
};

export default TestLoader;
