import React from 'react';
import Guest from './guest';


export default ( props ) => {
  const partyGuests = props.users.map( friend => {
    return <Guest key={friend.id} dispatch={props.dispatch} {...friend}/>
    })

  return (
    <div>
        <p>  
         {partyGuests}
        </p>
    </div>
  )
}
 