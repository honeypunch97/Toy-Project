import React from 'react';

const Message = ({ msg }) => {
   return <div className={`show ${msg ? 'on' : ''}`}>{msg}</div>;
};

export default Message;
