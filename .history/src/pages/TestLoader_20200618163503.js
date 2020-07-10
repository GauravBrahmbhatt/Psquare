import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// useState,
//useParams
/*componentDidMount() 
    {
        console.log("DidMount");
        console.log(this.props.location) // "?filter=top&origin=im"
    }*/
//console.log(this.props.location.search)
//console.log(this.props);
//console.log(this.props.match.params.value);

const TestLoader = ({ location }) => {
  //console.log(location.search);

  // const {num} = useParams();
  //  console.log(num);

  useEffect(() => {
    // get all the URLParams
    const params = new URLSearchParams(location.search);
    //let arr=params.getAll();
    //console.log(arr);
    const level = params.get("l");
    console.log("level");
    console.log(level);
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
        <div className="hover">Paper 1</p>
      </Link>
      <Link to="/timedtest?p=2">
        <p>Paper 2</p>
      </Link>
      <Link to="/timedtest?p=3">
        <p>Paper 3</p>
      </Link>
      <Link to="/timedtest?p=4">
        <p>Paper 4</p>
      </Link>
      <Link to="/timedtest?p=5">
        <p>Paper 5</p>
      </Link>
      <Link to="/timedtest?p=6">
        <p>Paper 6</p>{" "}
      </Link>
      <Link to="/timedtest?p=7">
        <p>Paper 7</p>
      </Link>
      <Link to="/timedtest?p=8">
        <p>Paper 8</p>
      </Link>
      <Link to="/timedtest?p=9">
        <p>Paper 9</p>
      </Link>
    </div>
  );
};

export default TestLoader;
