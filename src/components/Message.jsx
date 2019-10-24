import React from 'react';

// Tie in state from response
// {
// 	"messages": ["You have walked north."]
// }

const Message = (props) => {
	console.log("message", props)
	return (
		<div>
			<li>{props.message}</li>
		</div>
	)
};
export default Message;