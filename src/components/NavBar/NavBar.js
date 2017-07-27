import React, { Component } from 'react'
import { Row, Nav, NavItem } from 'react-bootstrap'

export default class NavBar extends Component {
	render() {
		const { onAddClick } = this.props
		const { onHomeClick } = this.props
		const style = {
			paddingTop: '20px',
			paddingBottom: '20px',
		}
		return (
			<Row className="show-grid" style={style}>
				<Nav bsStyle="pills" activeKey={1}>
					<NavItem  eventKey={1} onClick={() => onHomeClick()} >Home</NavItem>
					<NavItem  eventKey={2} onClick={() => onAddClick()} >Add </NavItem>
				</Nav>
			</Row>
		)
	}
}