import React, { Component } from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import UserList from 'components/UserList/UserList'

export default class UserGrid extends Component {
	render() {
		return (
			<Row className="show-grid">
				<Col md={12}>
					<UserList />
				</Col>
			</Row>
		)
	}
}
