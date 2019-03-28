import { createStore } from 'redux';

const initialState = {
    users: [],
    invitedGuests: [],
    dataLoad: false,
    
}

const reducer = ( oldState=initialState, action) => {
    switch(action.type){
       case "INVITED":
        return {
            ...oldState,
            users: oldState.users.filter( user => user.name !== action.payload.name),
            invitedGuests: [...oldState.invitedGuests, action.payload],
            isInvited: true
        }
        case "USERS":
        return {
            ...oldState,
            users: [...action.payload],
            dataLoad: true
        }
        default: return  oldState
    }

}

const store = createStore( 
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    )

export default store;