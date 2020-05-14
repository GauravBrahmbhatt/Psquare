import React from 'react'
import {Link} from 'react-router-dom';

 function testLoader() {
     
    return (
        <div>
            <Link to="/">back</Link>
            <h1>Test Papers</h1>
            <Link to="/timedtest">Paper 1</Link>
            <p>Paper 2</p>
        </div>
    )
}

export default testLoader;
