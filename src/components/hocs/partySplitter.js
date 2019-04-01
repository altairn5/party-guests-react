import React from 'react';

const partyHandler = (Component) => {

  // const splitGuestByInvitation = ({dispatch, list}) => {
  const splitGuestByInvitation = ({dispatch, listName, actionType ,...otherProps}) => {
      console.log("list actually and type of listName", otherProps[listName], typeof listName)
      return otherProps[listName].map( (friend) =>{
        //passing key helps react but limits power of HOC. react use it to render elements faster but it works well w/out it
        return <Component key={friend.id || friend.name} dispatch={dispatch} actionType={actionType} listName={listName} friend={friend}/>
      })
  }
  return splitGuestByInvitation;
}

export default partyHandler;
