import React, { Component } from 'react';
// import { dispatch } from 'rxjs/internal/observable/pairs';
import Person from './person';

 const guessComponent = (props) => {
   const isInvited = () => {
      props.dispatch({
          type: "INVITED",
          payload: props
      })
  }

  return (
        <div onClick={isInvited}>
            <div>
                <Person {...props}/>
            </div>
        </div>
      )
  }

export default guessComponent;
