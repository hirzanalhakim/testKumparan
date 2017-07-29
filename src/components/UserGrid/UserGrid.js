import React, { Component } from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
import { Row, Col } from 'react-bootstrap'

=======
import { Row, Col, Table } from 'react-bootstrap'

import UserHeader from 'components/UserHeader/UserHeader'
>>>>>>> 1a39a4c715cd12cb1777cd20381d5c7d41952e08
=======
import { Row, Col, Table } from 'react-bootstrap'

import UserHeader from 'components/UserHeader/UserHeader'
>>>>>>> 1a39a4c715cd12cb1777cd20381d5c7d41952e08
import UserList from 'components/UserList/UserList'

export default class UserGrid extends Component {
	render() {
		return (
			<Row className="show-grid">
				<Col md={12}>
<<<<<<< HEAD
<<<<<<< HEAD
					<UserList />
=======
=======
>>>>>>> 1a39a4c715cd12cb1777cd20381d5c7d41952e08
					<Table striped bordered condensed hover>
						<UserHeader />
						<UserList/>
					</Table>
<<<<<<< HEAD
>>>>>>> 1a39a4c715cd12cb1777cd20381d5c7d41952e08
=======
>>>>>>> 1a39a4c715cd12cb1777cd20381d5c7d41952e08
				</Col>
			</Row>
		)
	}
}
