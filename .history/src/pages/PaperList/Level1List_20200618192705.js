import React from 'react';
import {Link } from 'react-router-dom';

export default function Level1List() {
    return (
    <div>
      <Link to="/">back</Link>
      <h1 className="title1">Test Papers</h1>
      <Link to="/timedtest?p=1">
        <button className="hover">Paper 1</p>
      </Link>
      <Link to="/timedtest?p=2">
        <p className="hover">Paper 2</p>
      </Link>
      <Link to="/timedtest?p=3">
        <p className="hover">Paper 3</p>
      </Link>
      <Link to="/timedtest?p=4">
        <p className="hover">Paper 4</p>
      </Link>
      <Link to="/timedtest?p=5">
        <p className="hover">Paper 5</p>
      </Link>
      <Link to="/timedtest?p=6">
        <p className="hover">Paper 6</p>
      </Link>
      <Link to="/timedtest?p=7">
        <p className="hover">Paper 7</p>
      </Link>
      <Link to="/timedtest?p=8">
        <p className="hover">Paper 8</p>
      </Link>
      <Link to="/timedtest?p=9">
        <p className="hover">Paper 9</p>
      </Link>
    </div>
    )
}
