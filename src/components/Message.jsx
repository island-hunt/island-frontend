import React from 'react';
import ListItem from '@material-ui/core/ListItem';

// Tie in state from response
// {
// 	"messages": ["You have walked north."]
// }

const Message = (props) => {
	// console.log("message", props)
	return (
		<div className="message">
			{props.message}
			{/*<ListItem*/}
			{/*	primaryText={props.message}*/}
			{/*/>*/}
		</div>
	)
};
export default Message;