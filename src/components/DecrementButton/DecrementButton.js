import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'multireducer';
import { decrement } from 'redux/modules/counter';

@connect(
  (state, { multireducerKey: key }) => ({ count: state.counter[key].count }),
  (dispatch, { multireducerKey: key }) => bindActionCreators({ decrement }, dispatch, key)

)
export default class DecrementButton extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    decrement: PropTypes.func.isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const { count, decrement } = this.props; // eslint-disable-line no-shadow
    let { className } = this.props;
    className += ' btn btn-default';
    return (
      <button className={className} onClick={decrement}>
        Decrement me 
        {/* {count} time{count === 1 ? '' : 's'}. */}
      </button>
    );
  }
}
