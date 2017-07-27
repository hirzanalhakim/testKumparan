import React, { Component } from 'react';

export default class UserHeader extends Component {
	
	render() {
		// const inlineStyle = {
		// 	width: '285px'
		// }
		return (
			<thead>
		      <tr className="table-header">
		        <th>Nama</th>
		        <th>Alamat</th>
		        <th>Action</th>
		      </tr>
		    </thead>
		)
	}
}

