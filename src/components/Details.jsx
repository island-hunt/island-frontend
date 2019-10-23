import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Tie in state from response
// {
// 	"room_id": 10,
// 	"title": "A Dark Room",
// 	"description": "You cannot see anything.",
// 	"coordinates": "(60,61)",
// }

const Details = (props) => {
	const [detailsTable, setDetails] = useState();
		return (
		<div>
			<table>
				<tr>
					<th>Room Id:</th>
					<th>{props.room_id}</th>
				</tr>
				<tr>
					<th>Title:</th>
					<th>{props.title}</th>
				</tr>
				<tr>
					<th>Description:</th>
					<th>{props.description}</th>
				</tr>
				<tr>
					<th>Coordinates:</th>
					<th>{props.coordinates}</th>
				</tr>
			</table>
		</div>
	)
};

export default Details