import React from 'react';
import Message from './Message'
// import { FixedSizeList } from 'react-window';



const MessageBox = (props) => {
	return (
		<div className="message-box">
			{/*<FixedSizeList height={200} width={300} itemSize={40} itemCount={300} className="fixedsize">*/}
			{/*	test*/}
			{/*	{props.messages.map(msg => <Message key={props.id} message={msg}/>)}*/}
			{/*</FixedSizeList>*/}
			<ul>
				{props.messages.map(msg => <Message key={props.id} message={msg}/>)}
			</ul>
		</div>
	)
};
export default MessageBox;