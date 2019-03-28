import React from 'react';
import Guest from './guest';


export default ( props ) => {
  const partyGuests = props.users.map( friend => {
    return <Guest dispatch={props.dispatch} {...friend}/>
    })

  return (
    <div>
        <p>  
         {partyGuests}
        </p>
    </div>
  )
}
 