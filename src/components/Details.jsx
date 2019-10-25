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
		return (
		<div className="details">
			<p>Room ID: {props.room_id}</p>
			<p>Scene: {props.title}</p>
			<p>{props.description}</p>
			{/* <p>Coordinates: {props.coordinates}</p> */}
			
			<p>Items: {props.items}</p>
			<p>Exits: {props.exits}</p>
		</div>
	)
};

export default Details