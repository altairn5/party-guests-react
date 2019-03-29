import React, {useState, useEffect} from 'react';
import Guests from '../partials/guests';
import InvitedGuests from '../partials/invited';
import * as config from '../../config';
import store from '../../state/store';
// src/state/store.js
// src/components/pages/guestList.js

// const parsedData = ( users ) => users.map()

const guestListComponent = () =>{
  // call useState
  const stateByMe = store.getState();
  const [users, setUsersState] = useState(stateByMe);

  console.log("stateByMe", stateByMe)
  // call useSideEfeect
  useEffect(() =>{
    const callMeToUpdateState = () =>{
        setUsersState(store.getState())
    }

    store.subscribe(callMeToUpdateState)
    
    fetch(config.usersUrl)
        .then(res => res.json())
        .then(json => {
            store.dispatch({
                type: "USERS",
                payload: json
            })

        });
        //replaces unsubscribe
  }, []);

  let toRender = <div>
           <img src="loading.gif"/>
          </div>;

  if(users.dataLoad){
    toRender = <div>
    <div className = "Invited">
          <h1>Invited</h1>
          <div>
              <InvitedGuests dispatch={store.dispatch} {...users}/>
          </div>
      </div>
      <div className = "friends">
          <h1>Friends</h1>
          <div>
              <Guests dispatch={store.dispatch} {...users}/>
          </div>
      </div>
      </div>;
  }

  return toRender
}


export default guestListComponent;
