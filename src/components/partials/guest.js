// unnecessary to call convention once we change to fs component
// import React, { Component } from 'react';
// import { dispatch } from 'rxjs/internal/observable/pairs'; // no idea might click later

import React from 'react';
import partySplitter from '../hocs/partySplitter';// imports higher order componets that does some magic
import withLoaderGif from '../hocs/withLoader';
import Person from './person';

 const guessComponent = (props) => {
   console.log("props",props)
   const selected = () => {
      props.dispatch({
          type: props.actionType,
          payload: props.friend
      })
  }

  return (
        <div onClick={selected}>
            <div>
                <Person {...props.friend}/>
            </div>
        </div>
      )
  }

export default withLoaderGif(partySplitter(guessComponent));
