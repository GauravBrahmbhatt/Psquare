import React from 'react'
import {Link } from 'react-router-dom';

export default function Level3List() {
    return (
        <div>
        <Link to="/">back</Link>
            <h1>Abacus Papers</h1>
            <Link to="/timedtest?a=1" ><p>Paper 1</p></Link>
            <Link to="/timedtest?a=2" ><p>Paper 2</p></Link>
            <Link to="/timedtest?a=3" ><p>Paper 3</p></Link>
            <Link to="/timedtest?a=4" ><p>Paper 4</p></Link>
            <Link to="/timedtest?a=5" ><p>Paper 5</p></Link>
            <Link to="/timedtest?a=6" ><p>Paper 6</p> </Link>
            <Link to="/timedtest?a=7" ><p>Paper 7</p></Link>
            <Link to="/timedtest?a=8" ><p>Paper 8</p></Link>
            <Link to="/timedtest?a=9" ><p>Paper 9</p></Link>
            <h1>Mental Maths Papers</h1>
            <Link to="/timedtest?m=1" ><p>Paper 1</p></Link>
            <Link to="/timedtest?m=2" ><p>Paper 2</p></Link>
            <Link to="/timedtest?m=3" ><p>Paper 3</p></Link>
            <Link to="/timedtest?m=4" ><p>Paper 4</p></Link>
            <Link to="/timedtest?m=5" ><p>Paper 5</p></Link>
            <Link to="/timedtest?m=6" ><p>Paper 6</p> </Link>
            <Link to="/timedtest?m=7" ><p>Paper 7</p></Link>
            <Link to="/timedtest?m=8" ><p>Paper 8</p></Link>
            <Link to="/timedtest?p=9" ><p>Paper 9</p></Link>
        </div>
    )
}
