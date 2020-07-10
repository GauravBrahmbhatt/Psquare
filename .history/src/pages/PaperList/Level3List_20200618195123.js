import React from 'react'
import {Link } from 'react-router-dom';
//timedtest?L={level}&a=val&m=val

function Level3List(props) {
    console.log(props.level);
    return (
        <div>
        <Link to="/">back</Link>
            <h1 className="title1">Abacus Papers</h1>
            <Link to={`/timedtest?l=${props.level}&a=1`}>
                <button className="hover">Paper 1</button>
            </Link>
            <Link to={`/timedtest?l=${props.level}&a=2`}>
                <button className="hover">Paper 2</button>
            </Link>
            <Link to={`/timedtest?l=${props.level}&a=3`}>
                <button className="hover">Paper 3</button>
            </Link>
            <Link to={`/timedtest?l=${props.level}&a=4`}>
                <button className="hover">Paper 4</button>
            </Link>
            <Link to={`/timedtest?l=${props.level}&a=5`}>
                <button className="hover">Paper 5</button>
            </Link>
            <Link to={`/timedtest?l=${props.level}&a=6`}>
                <button className="hover">Paper 6</button>
            </Link>
            <Link to="/timedtest?a=7">
                <button className="hover">Paper 7</button>
            </Link>
            <Link to="/timedtest?a=8">
                <button className="hover">Paper 8</button>
            </Link>
            <Link to="/timedtest?a=9">
                <button className="hover">Paper 9</button>
            </Link>
            <h1 className="title1">Mental Maths Papers</h1>
            <Link to="/timedtest?m=1">
                <button className="hover">Paper 1</button>
            </Link>
            <Link to="/timedtest?m=2">
                <button className="hover">Paper 2</button>
            </Link>
            <Link to="/timedtest?m=3">
                <button className="hover">Paper 3</button>
            </Link>
            <Link to="/timedtest?m=4">
                <button className="hover">Paper 4</button>
            </Link>
            <Link to="/timedtest?m=5">
                <button className="hover">Paper 5</button>
            </Link>
            <Link to="/timedtest?m=6">
                <button className="hover">Paper 6</button>
            </Link>
            <Link to="/timedtest?m=7">
                <button className="hover">Paper 7</button>
            </Link>
            <Link to="/timedtest?m=8">
                <button className="hover">Paper 8</button>
            </Link>
            <Link to="/timedtest?m=9">
                <button className="hover">Paper 9</button>
            </Link>
        </div>
    )
}


export default Level3List;