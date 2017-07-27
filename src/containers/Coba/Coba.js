import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DecrementButton } from 'components';
import { set } from 'redux/modules/name';

@connect(
    state => ({ counter: state.counter, name: state.name.name }),
    { setName: set }
)
export default class Coba extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    handleClick = () => {
        // console.log(this.refs.input.value);
        this.props.setName(this.state.name);
    }
    handleChange = (event) => {
        this.setState({ name: event.target.value })
    }
    render() {
        const { name } = this.state;
        return (
            <div>
                <br/>Hallo, {this.props.name}<br />
                Counter 1: {this.props.counter.counter1.count}
                <DecrementButton multireducerKey="counter1" />
                {/*<input type="text" ref="input"/>*/}
                <input type="text" value={name} onChange={this.handleChange} />
                <button onClick={this.handleClick}>input</button>
            </div>
        );
    }
}   