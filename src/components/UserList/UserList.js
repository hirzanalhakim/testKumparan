import React, { Component } from 'react';
import PropTypes from 'prop-types';

import User from 'components/User/User'
import { connect } from 'react-redux';
<<<<<<< HEAD
<<<<<<< HEAD
// import ModalEdit from 'components/ModalEdit/ModalEdit';
import UserHeader from 'components/UserHeader/UserHeader'
import Modal from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import { Button, Table} from 'react-bootstrap';
=======
>>>>>>> 1a39a4c715cd12cb1777cd20381d5c7d41952e08
=======
>>>>>>> 1a39a4c715cd12cb1777cd20381d5c7d41952e08

@connect(
	state => ({
		user: state.user
	})
)
export default class UserList extends Component {
	static propTypes = {
<<<<<<< HEAD
<<<<<<< HEAD
		user: PropTypes.object.isRequired,
=======
		user: PropTypes.object.isRequired
>>>>>>> 1a39a4c715cd12cb1777cd20381d5c7d41952e08
=======
		user: PropTypes.object.isRequired
>>>>>>> 1a39a4c715cd12cb1777cd20381d5c7d41952e08
	}
	constructor(props) {
		super(props)
		this.state = {
<<<<<<< HEAD
<<<<<<< HEAD
			user: props.user,
			showInsert: false,
=======
			user: props.user
>>>>>>> 1a39a4c715cd12cb1777cd20381d5c7d41952e08
=======
			user: props.user
>>>>>>> 1a39a4c715cd12cb1777cd20381d5c7d41952e08
		};
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ user: nextProps.user })
	}

	onDeleteClick = index => {
		const { user } = this.state;
<<<<<<< HEAD
<<<<<<< HEAD
		user.data.results.splice(index, 1);
		this.setState({ user });
	}
	onEditClick = (index, name, alamat) => {
		const { user } = this.state;
		user.data.results[index].name = name;
		user.data.results[index].alamat = alamat;
		this.setState({ user });
	}

	inputName = event => {
		this.setState({ name: event.currentTarget.value })
	}

	inputAlamat = event => {
		this.setState({ alamat: event.currentTarget.value })
	}

	newName = () => {
		const { user } = this.state;
		user.data.results.push({
			id: user.data.results.length + 1,
			name: this.state.name,
			alamat: this.state.alamat

		});
		this.setState({ showInsert: false, user });
	}

	show = () => {
		this.setState({ showInsert: true });
	}
	close = () => {
		this.setState({ showInsert: false });
	}

	render() {
		const { onEditClick, onDeleteClick } = this.props
		const { user, showInsert } = this.state

		const styles = {
			input: {
				flex: 1,
				width: "80%",
				height: 30,
				borderRadius: 5
			},
			inputAdd: {
				marginBottom: 5
			},
			form: {
				marginTop: 0
			},
			buttonInput: {
				marginTop: 30,
				marginBottom: 10
			}
		}

		return (
			<div>
				<Button bsStyle="primary" onClick={this.show} style={styles.inputAdd}> Add </Button>
				<Table striped bordered condensed hover>
					<UserHeader />
					<tbody>
						{user && user.loading &&
							<h2>Loading...</h2>
						}
						{user && user.data && user.data.results && user.data.results.map((user, index) =>
							<User key={user.id} {...user} index={index} onEdit={this.onEditClick} onDelete={this.onDeleteClick}></User>
						)}
						<Modal show={showInsert} onHide={this.close}>
							<Modal.Header closeButton>
								<Modal.Title>Create User</Modal.Title>
							</Modal.Header>
							<Modal.Body>
									<h4>Name:</h4>
									<input type="text" placeholder="Input Name" style={styles.input} onChange={this.inputName} /> <br />
									<h4>Alamat: </h4>
									<input type="text" placeholder="Input Alamat" style={styles.input} onChange={this.inputAlamat} /> <br/>
									<Button bsStyle="success" onClick={this.newName} style={styles.buttonInput}>Submit</Button>
							</Modal.Body>
						</Modal>
					</tbody>
				</Table>
			</div>
		)
	}
}
=======
=======
>>>>>>> 1a39a4c715cd12cb1777cd20381d5c7d41952e08
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
<<<<<<< HEAD
>>>>>>> 1a39a4c715cd12cb1777cd20381d5c7d41952e08
=======
>>>>>>> 1a39a4c715cd12cb1777cd20381d5c7d41952e08
