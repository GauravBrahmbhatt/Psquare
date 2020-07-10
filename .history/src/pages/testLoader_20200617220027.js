





import React, { useState, useEffect }  from 'react'
import {Link } from 'react-router-dom';

//useParams
/*componentDidMount() 
    {
        console.log("DidMount");
        console.log(this.props.location) // "?filter=top&origin=im"
    }*/
    //console.log(this.props.location.search)
     //console.log(this.props);
     //console.log(this.props.match.params.value);



 const testLoader = ({ location }) =>
 {
    //console.log(location);

       // const {num} = useParams();
       //  console.log(num);

       useEffect(() => {
        // get all the URLParams
        const params = new URLSearchParams(location.search);
        // get the q param
        const q = params.get('q');
        // set language in state to the q parameter
        //setLanguage(q ? q : 'MatLab');
        //eslint-disable-next-line
      }, []);
    




    return (
        <div>
            <Link to="/">back</Link>
            <h1>Test Papers</h1>
            <Link to="/timedtest" >Paper 1</Link>
            <Link to="/timedtest" ><p>Paper 2</p></Link>
            <Link to="/timedtest" ><p>Paper 3</p></Link>
            <Link to="/timedtest" ><p>Paper 4</p></Link>
            <Link to="/timedtest" ><p>Paper 5</p></Link>
            <Link to="/timedtest" ><p>Paper 6</p> </Link>
            <Link to="/timedtest" ><p>Paper 7</p></Link>
            <Link to="/timedtest" ><p>Paper 8</p></Link>
            <Link to="/timedtest" ><p>Paper 9</p></Link>

        </div>
    )
}


export default testLoader;
