import React from 'react'
import {Link} from 'react-router-dom';

 function testLoader() {
    return (
        <div>
            <Link to="/">back</Link>
            <h1>Alright Alright Alright</h1>
            <Link to="/timedtest">Paper 1</Link>
            <p>test2</p>
        </div>
    )
}

export default testLoader;
