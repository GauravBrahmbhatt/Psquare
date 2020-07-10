import React from 'react'

export default function Level1List() {
    return (
        <div>
        <Link to="/">back</Link>
            <h1>Test Papers</h1>
            <Link to="/timedtest?p=1" ><p>Paper 1</p></Link>
            <Link to="/timedtest?p=2" ><p>Paper 2</p></Link>
            <Link to="/timedtest?p=3" ><p>Paper 3</p></Link>
            <Link to="/timedtest?p=4" ><p>Paper 4</p></Link>
            <Link to="/timedtest?p=5" ><p>Paper 5</p></Link>
            <Link to="/timedtest?p=6" ><p>Paper 6</p> </Link>
            <Link to="/timedtest?p=7" ><p>Paper 7</p></Link>
            <Link to="/timedtest?p=8" ><p>Paper 8</p></Link>
            <Link to="/timedtest?p=9" ><p>Paper 9</p></Link>
        </div>
    )
}
