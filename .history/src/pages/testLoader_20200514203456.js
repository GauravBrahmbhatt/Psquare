import React from 'react'
import {Link} from 'react-router-dom';

 function testLoader() {
     //console.log(this.props);
    return (
        <div>
            <Link to="/">back</Link>
            <h1>Test Papers</h1>
            <Link to="/timedtest/1" >Paper 1</Link>
            <Link to="/timedtest/2" ><p>Paper 2</p></Link>
            <Link to="/timedtest/3" ><p>Paper 3</p></Link>
            <Link to="/timedtest/4" ><p>Paper 4</p></Link>
            <Link to="/timedtest/5" ><p>Paper 5</p></Link>
            <Link to="/timedtest/6" ><p>Paper 6</p> </Link>
            <Link to="/timedtest/1" ><p>Paper 7</p></Link>
            <Link to="/timedtest/1" ><p>Paper 8</p></Link>
            <Link to="/timedtest/1" ><p>Paper 9</p></Link>

        </div>
    )
}

export default testLoader;
