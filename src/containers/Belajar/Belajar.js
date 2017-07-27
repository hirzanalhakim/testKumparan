import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DecrementButton } from 'components';
import { CounterButton } from 'components';
import { set } from 'redux/modules/name';

@connect(
    state =>({
        counter:state.counter, name: state.name.name
    }),  {setName: set }
    
)

export default class Belajar extends Component {
    constructor(props){
            super(props);
            this.state = {
                name: ''
            }
        }
        
        nameClick = () => {
            this.props.setName(this.state.name);
        }
        nameChange = (event) =>{
            this.setState({name: event.target.value})
        }
    
    render() {
        const { name } = this.state;
        return (
            <div>
                <div>
                    <br/>
                    <h2>halaman Belajar</h2>
                    <br/>
                </div>

                <div>
                    <h4>Counter 1: {this.props.counter.counter1.count}</h4>
                </div>

                <div>
                    <CounterButton multireducerKey="counter1"/>
                    <DecrementButton multireducerKey="counter1"/>
                    <br/><br/>
                </div>

                <div>
                    <input type="text" onChange={this.nameChange} value={name}/>
                    <button onClick={this.nameClick}>Input</button>
                </div>
            </div>
        );
    }
}