import React, { Component, useState, useEffect } from 'react';
import Guests from '../partials/guests';
import InvitedGuests from '../partials/invited';
import * as config from '../../config';
import store from '../../state/store';
// src/state/store.js
// src/components/pages/guestList.js

// const parsedData = ( users ) => users.map()



export default class extends Component {

    // set state
    state = store.getState();
    
    componentDidMount() {
        const callMeToUpdateState = () =>{
            this.setState(store.getState())
            console.log("I UPODATE STADOD", this.state)
        }

        this.unsubscribe = store.subscribe(callMeToUpdateState)

        fetch(config.usersUrl)
            .then(res => res.json())
            .then(json => {
                store.dispatch({
                    type: "USERS",
                    payload: json
                })
            //  console.log("ele estado de mi guesstsLIST", this.state)
            });
    }

    render() {
        let toRender = <div>
                 <img src="loading.gif"/>
                </div>;

        if(this.state.dataLoad){
          toRender = <div>
          <div className = "Invited">
                <h1>Invited</h1>
                <div>
                    <InvitedGuests dispatch={store.dispatch} {...this.state}/>
                </div>
            </div>
            <div className = "friends">
                <h1>Friends</h1>
                <div>
                    <Guests dispatch={store.dispatch} {...this.state}/>
                </div>
            </div>
            </div>;
        }

        return toRender
    }

}
