import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import UserGrid from 'components/UserGrid/UserGrid'
import { connect } from 'react-redux';
import { loadData } from 'redux/modules/user';

@connect(
  state => ({
    user: state.user
  }),
  { loadData }
)
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    const style = {
			paddingTop: '20px',
			paddingBottom: '20px',
		}
    const { user } = this.state;
    return (
      <div className="container" style={style}>
          <UserGrid list={user} />
      </div>
    )

  }
}
