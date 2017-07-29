import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap'

export default class User extends Component {
	static propTypes = {
		index: PropTypes.number.isRequired,
		onDelete: PropTypes.func.isRequired,
		onEdit: PropTypes.func.isRequired,
	}
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			name: props.name,
			alamat: props.alamat
		}
	}
	close = () => {
		this.setState({ showModal: false });
	}
	handleEdit = () => {
		this.setState({ showModal: true });
	}
	submitEdit = () => {
		this.setState({ showModal: false });
		this.props.onEdit(this.props.index, this.state.name, this.state.alamat);
	}
	editName = event => {
		this.setState({ name: event.currentTarget.value })
	}
	editAlamat = event => {
		this.setState({ alamat: event.currentTarget.value })
	}
	render() {
		const { onEdit, onDelete, index } = this.props
		const { name, alamat, showModal } = this.state;
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
			},
			colWidth: {
				width: "30%"
			}
		}
		return (
			<tr>
				<td>{name}</td>
				<td>{alamat}</td>
				<td>
					<Button bsStyle="info" onClick={this.handleEdit}>Edit</Button>
					&nbsp;&nbsp;
		        	<Button bsStyle="danger" onClick={() => onDelete(index)}>Delete</Button>
				</td>
				<Modal show={showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>Edit User</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Name:</h4>
						<input type="text" value={name} style={styles.input} onChange={this.editName} />
						<h4>Alamat: </h4>
						<input type="text" value={alamat} style={styles.input} onChange={this.editAlamat} /> 
						<br/>
						<Button bsStyle="info" style={styles.buttonInput} onClick={this.submitEdit}>Submit</Button>
					</Modal.Body>
				</Modal>
			</tr>
		);
	}
}
