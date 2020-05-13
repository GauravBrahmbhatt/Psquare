import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import data from '../PracticeTest-master/JSON_PT.json';

export default class timedTest extends Component {

    constructor(){
        super();
        this.state = {
            count:0,
            answers:[]
        }
    }

    handleSubmit(){

    }

    render() {
        console.log(data);

        return (
            <div>
                <Link to="/testpage">back</Link>
                <div>Total Questions: {data.length}</div>
                <div>
                    {data[this.state.count].q.map(res2=>
                        <li>{res2}</li>
                    )}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">username</label>
                    <input
                        type="number"
                        name="number"
                        defaultValue="cool-guy"
                        ref={(input) => this.input = input}
                    />
                </form>
            </div>
        )
    }
}
