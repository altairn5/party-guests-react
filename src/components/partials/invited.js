import React from 'react';
import Guest from  './guest';
// invitedGuests

const partyGuests = (props) => {

    return (props.invitedGuests.map( friend => {
        return <Guest dispatch={props.dispatch} {...friend}/>
        })
    )
}

const invitedGuests = (props) =>
    <div className="invited-guests-wrapper">
        <div className="header"></div>
        <div>{partyGuests(props)} </div>
    </div>

export default invitedGuests;