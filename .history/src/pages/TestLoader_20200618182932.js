import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const TestLoader = ({ location }) => {

    const [ level, setLLevel ] = useState('');
   
  useEffect(() => {

    const params = new URLSearchParams(location.search);
    //let arr=params.getAll();
    //console.log(arr);
    const level = params.get("l");
    setLLevel(level ? level : "1");

    //console.log("level");
    //console.log(level);
    // get the q param
    //const q = params.get('q');
    // set language in state to the q parameter
    //setLanguage(q ? q : 'MatLab');
    //eslint-disable-next-line
  }, []);

  return (

    <div>
      <Link to="/">back</Link>
      <h1 className="title1">Test Papers</h1>
      <Link to="/timedtest?p=1">
        <p className="hover">{}} 1</p>
      </Link>
      <Link to="/timedtest?p=2">
        <p className="hover">Paper 2</p>
      </Link>
      <Link to="/timedtest?p=3">
        <p className="hover">Paper 3</p>
      </Link>
      <Link to="/timedtest?p=4">
        <p className="hover">Paper 4</p>
      </Link>
      <Link to="/timedtest?p=5">
        <p className="hover">Paper 5</p>
      </Link>
      <Link to="/timedtest?p=6">
        <p className="hover">Paper 6</p>
      </Link>
      <Link to="/timedtest?p=7">
        <p className="hover">Paper 7</p>
      </Link>
      <Link to="/timedtest?p=8">
        <p className="hover">Paper 8</p>
      </Link>
      <Link to="/timedtest?p=9">
        <p className="hover">Paper 9</p>
      </Link>
    </div>
  );
};

export default TestLoader;
