import React from 'react';
import {Link } from 'react-router-dom';

export default function Level1List() {
    return (
    <div>
      <Link to="/">back</Link>
      <h1 className="title1">Test Papers</h1>
      <img src = "../sheet.svg"/><Link to="/timedtest?p=1">
        <button className="hover">Paper 1</button>
      </Link>
      <Link to="/timedtest?p=2">
        <button className="hover">Paper 2</button>
      </Link>
      <Link to="/timedtest?p=3">
        <button className="hover">Paper 3</button>
      </Link>
      <Link to="/timedtest?p=4">
        <button className="hover">Paper 4</button>
      </Link>
      <Link to="/timedtest?p=5">
        <button className="hover">Paper 5</button>
      </Link>
      <Link to="/timedtest?p=6">
        <button className="hover">Paper 6</button>
      </Link>
      <Link to="/timedtest?p=7">
        <button className="hover">Paper 7</button>
      </Link>
      <Link to="/timedtest?p=8">
        <button className="hover">Paper 8</button>
      </Link>
      <Link to="/timedtest?p=9">
        <button className="hover">Paper 9</button>
      </Link>
    </div>
    )
}
