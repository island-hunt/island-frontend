import React from 'react';
import Message from './Message'


const MessageBox = (props) => {
	console.log("messageBox", props);
	return (
		<div className="message-box">
			<p>Messages:</p>
			<ul>
				{props.messages.map(msg => <Message key={props.id} message={msg}/>)}
			</ul>
			<Message />
		</div>
	)
};
export default MessageBox;