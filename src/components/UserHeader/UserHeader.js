import React, { Component } from 'react';

export default class UserHeader extends Component {

	render() {
		const colWidth = {
			width: "15%"
		}
		return (
			<thead>
				<tr className="table-header">
					<th>Nama</th>
					<th>Alamat</th>
					<th style={colWidth}>Action</th>
				</tr>
			</thead>
		)
	}
}

