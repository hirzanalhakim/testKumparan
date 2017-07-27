import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'

export default class User extends Component {
	static propTypes = {
		index: PropTypes.number.isRequired,
		onDelete: PropTypes.func.isRequired,
		onEdit: PropTypes.func.isRequired,
	}
	render() {
		const { id, name, alamat, onEdit, onDelete, index } = this.props
		return (
			<tr>
		        <td>{name}</td>
		        <td>{alamat}</td>
		        <th>
		        	<Button bsStyle="info" onClick={() => onEdit(id) }>Edit</Button>
		        	&nbsp;&nbsp;
		        	<Button bsStyle="danger" onClick={() => onDelete(index) }>Delete</Button>
		        </th>
		    </tr>
		);
	}
}
