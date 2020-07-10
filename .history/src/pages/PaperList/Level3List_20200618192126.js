import React from 'react'
import {Link } from 'react-router-dom';
//timedtest?L={level}&a=val&m=val

function Level3List(props) {
    console.log(props.level);
    return (
        <div>
        <Link to="/">back</Link>
            <h1 className="title1">Abacus Papers</h1>
            <Link to="/timedtest?la=1">
                <p className="hover">Paper 1</p>
            </Link>
            <Link to="/timedtest?a=2">
                <p className="hover">Paper 2</p>
            </Link>
            <Link to="/timedtest?a=3">
                <p className="hover">Paper 3</p>
            </Link>
            <Link to="/timedtest?a=4">
                <p className="hover">Paper 4</p>
            </Link>
            <Link to="/timedtest?a=5">
                <p className="hover">Paper 5</p>
            </Link>
            <Link to="/timedtest?a=6">
                <p className="hover">Paper 6</p>
            </Link>
            <Link to="/timedtest?a=7">
                <p className="hover">Paper 7</p>
            </Link>
            <Link to="/timedtest?a=8">
                <p className="hover">Paper 8</p>
            </Link>
            <Link to="/timedtest?a=9">
                <p className="hover">Paper 9</p>
            </Link>
            <h1 className="title1">Mental Maths Papers</h1>
            <Link to="/timedtest?m=1">
                <p className="hover">Paper 1</p>
            </Link>
            <Link to="/timedtest?m=2">
                <p className="hover">Paper 2</p>
            </Link>
            <Link to="/timedtest?m=3">
                <p className="hover">Paper 3</p>
            </Link>
            <Link to="/timedtest?m=4">
                <p className="hover">Paper 4</p>
            </Link>
            <Link to="/timedtest?m=5">
                <p className="hover">Paper 5</p>
            </Link>
            <Link to="/timedtest?m=6">
                <p className="hover">Paper 6</p>
            </Link>
            <Link to="/timedtest?m=7">
                <p className="hover">Paper 7</p>
            </Link>
            <Link to="/timedtest?m=8">
                <p className="hover">Paper 8</p>
            </Link>
            <Link to="/timedtest?m=9">
                <p className="hover">Paper 9</p>
            </Link>
        </div>
    )
}


export default Level3List;