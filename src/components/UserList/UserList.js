import React, { Component } from 'react';
import PropTypes from 'prop-types';

import User from 'components/User/User'
import { connect } from 'react-redux';

@connect(
	state => ({
		user: state.user
	})
)
export default class UserList extends Component {
	static propTypes = {
		user: PropTypes.object.isRequired
	}
	constructor(props) {
		super(props)
		this.state = {
			user: props.user
		};
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ user: nextProps.user })
	}

	onDeleteClick = index => {
		const { user } = this.state;
		user.data.results.slice(1, index);
		this.setState({ user });
	}
	onEditClick = () => {
		console.log('edit');
	}
	render() {
		console.log(this.props)
		const { onEditClick, onDeleteClick } = this.props
		const { user } = this.state

		return (
			<tbody>
				{user && user.loading &&
					<h2>Loading...</h2>
				}
				{user && user.data && user.data.results && user.data.results.map((user, index) =>
					<User key={user.id} {...user} index={index} onEdit={this.onEditClick} onDelete={this.onDeleteClick}></User>
				)}
			</tbody>
		)
	}
}
