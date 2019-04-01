import React, {useState, useEffect} from 'react';
import Guest from '../partials/guest';
import LoadingGif from '../partials/loadingGif.js';
import * as config from '../../config';
import store from '../../state/store';
// src/state/store.js
// src/components/pages/guestList.js

// const parsedData = ( users ) => users.map()

const guestListComponent = () =>{
  //Local variable with initial state useState
  // initial state see store.js=  {
  //     users: [],
  //     invitedGuests: [],
  //     dataLoad: false,
  //
  // }

  const stateByMe = store.getState();

  // sets "gotten" and setter method for setting state.
  // gotten method get updated when store gets updated
  const [state, setState] = useState(stateByMe);
  // const [users, setUsersState] = useState(stateByMe.users);
  // const [invitedGuests, setInvitedGuestsState] = useState(stateByMe.invitedGuests);
  // call useSideEfeect previously would have used componentDidMount() life cycle method
  useEffect(() =>{

    // cb to use setter when state gets updated
    const callMeToUpdateState = () => setState(store.getState());

    //subscribe to store and pass cb, so states gets updated every time store's state reference is updated. unit cycle data model
    // we only need to suscribe in the top parent component and update there
    // we can call dispatch from any children compenent where state needs to be updated (convention)
    store.subscribe(callMeToUpdateState);

    fetch(config.usersUrl)
        .then(res => res.json())
        .then(json => {
            store.dispatch({ // dispatch calls store reducer to update action.type "USERS" (friends)
                type: "USERS_LOADED",
                payload: json
            })
        });

  }, []);// passing empty array is needed to reset any subscription once component is unmounted


    // remember we re-render everytime store gets updated, so invitedGuests will show when invitedGuests list gets updated

  return(
    <div>
      <div className = "invited">
        <h1>Invited</h1>
        <div>
          <Guest loaded={state.dataLoad} dispatch={store.dispatch} listName="invitedGuests" actionType="UNINVITED" {...state}/>
          </div>
      </div>
      <div className = "friends">
        <h1>Friends</h1>
        <div>
          <Guest loaded={state.dataLoad} dispatch={store.dispatch} listName="users" actionType="INVITED" {...state}/>
        </div>
      </div>
    </div>
  )
}

/*
*
* Logic Below Extracted Into a withloader HOC
*
*/
// let toRender = <LoadingGif />
//
// //Once data is loaded. we render component page
// if(state.dataLoad){
//   //will pass dispatch as props until react-redus gets implemented
//   // remember we re-render everytime store gets updated, so invitedGuests will show when invitedGuests list gets updated
//   toRender = <div>
//     <div className = "Invited">
//       <h1>Invited</h1>
//       <div>
//         <Guest dispatch={store.dispatch} listName="invitedGuests" actionType="UNINVITED" {...state}/>
//       </div>
//     </div>
//     <div className = "friends">
//       <h1>Friends</h1>
//       <div>
//       <Guest dispatch={store.dispatch} listName="users" actionType="INVITED" {...state}/>
//       </div>
//     </div>
//   </div>;





export default guestListComponent;
