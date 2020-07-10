





import React from 'react'
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



 function testLoader(){

       // const {num} = useParams();
       //  console.log(num);
    return (
        <div>
            <Link to="/">back</Link>
            <h1>Test Papers</h1>
            <Link to="/timedtest" >Paper 1</Link>
            <Link to="/timedtest" ><p>Paper 2</p></Link>
            <Link to="/timedtest" ><p>Paper 3</p></Link>
            <Link to="/timedtest" ><p>Paper 4</p></Link>
            <Link to="/timedtest/5" ><p>Paper 5</p></Link>
            <Link to="/timedtest/6" ><p>Paper 6</p> </Link>
            <Link to="/timedtest/7" ><p>Paper 7</p></Link>
            <Link to="/timedtest/8" ><p>Paper 8</p></Link>
            <Link to="/timedtest/9" ><p>Paper 9</p></Link>

        </div>
    )
}


export default testLoader;
