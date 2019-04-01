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
        }
      case "UNINVITED":
        return {
          ...oldState,
          users: [...oldState.users, action.payload],
          invitedGuests: oldState.invitedGuests.filter( uninvited => uninvited.name !== action.payload.name)
        }
      case "USERS_LOADED":
        return {
            ...oldState,
            users: [...action.payload],
            dataLoad: true,
        }
        default: return oldState
    }
}


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //middlewear redux-devtools-extension lets track state overtime
    )

export default store;
