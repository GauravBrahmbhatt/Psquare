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

    handleSubmit= event =>{
        event.preventDefault();
        //alert('Your username is: ' + this.input.value);
        this.setState({answers:[...this.input.value]});

        




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
                        type="text"
                        name="number"
                        pattern="[0-9]*"
                        //defaultValue="0"
                        ref={(input) => this.input = input}
                    />
                </form>
            </div>
        )
    }
}
