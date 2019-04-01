## TODO list
1. extract logic common logic in a higher order component (done)
2. Work on finishing redux (sort of )
3. Work on React redux having started
4. Hooks and fs on everything
5. Functionally
6. Unit test // test the public API (what the client will see, no internal boolean or implentation details or package from external libraries

## WHAT WAS DONE IN BRANCH
1. turn all lower class components into functional components
2. added hooks to the project in GuestList.js
  a. useState: to get "gotten" variable and setter fs for state fs
  b. useEffect hooks to replace life cycle method componentDidMount and pass [] to useEffect
  so it resets any subscription once component gets unmounted
3.  modify redux:
  - store subscription: implemented cb (callMeToUpdateState), so it uses setState setter fs.
  - reducer added actions:
    UNINVITED: which removes invitedGuests and addes back to user array
    USERS_LOADED changed name for clarity
4. Created High order component name partySplitter:
   - with partySplitter HOC the functionality of Invited and Guest Components were extracted and those components removed.
   - takes a list of objects, calls maps on it and, returns an array of Guest components
   - takes the following props:
    - dispatch object:store.dispatch so each new guest comp can call dispatch on data click
    - listName string: property of state object to retrieve array of objs for invited and users
    - actionType string: so each Guest component passes the right action type
    - state: state

  5. added loadingGif component, needs to be implemented still, but it is pretty much done

  Notes:
  at first I thought of having
    const [users, setUsersState] = useState(stateByMe.users);
    const [invitedGuests, setInvitedGuestsState] = useState(stateByMe.invitedGuests);
  in the GuestList component but realized it would be hard to implemente with plain Redux

  so opted for having simple  const [state, setState] = useState(stateByMe); which update the entire state. after i went this route realized it was the best alternative since
  both invitedGuests and users lists are tightly coupled, so both components would have to be re-rendered every time as both lists get updated every time an element gets clicked.

## WHATS NEXT?
 1. finish adding loadingGif component
 2. commit and create new branch to implement React Redux
