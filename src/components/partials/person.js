import React from 'react';

const personComponent = (props) =>
    <div>
        <div className="user-name">{props.name}</div>
        <div className="user-username">{props.username}</div>
        <div className="user-email">{props.email}</div>
    </div>

export default personComponent;