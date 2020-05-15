import React from 'react'
import {Link} from 'react-router-dom';

 function testLoader() {
     //console.log(this.props);
    return (
        <div>
            <Link to="/">back</Link>
            <h1>Test Papers</h1>
            <Link to="/timedtest" path='/:num'>Paper 1</Link>
            <p>Paper 2</p>
            <p>Paper 3</p>
            <p>Paper 4</p>
            <p>Paper 5</p>
            <p>Paper 6</p>
            <p>Paper 7</p>
            <p>Paper 8</p>
            <p>Paper 9</p>

        </div>
    )
}

export default testLoader;
