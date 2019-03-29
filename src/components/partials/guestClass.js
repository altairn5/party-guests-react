import React, { Component } from 'react';
// import { dispatch } from 'rxjs/internal/observable/pairs';
import Person from './person';

export default class Guest extends Component {

  render () {
    const isInvited = () => { 
        this.props.dispatch({
            type: "INVITED",
            payload: this.props
        })
    }

      return (  
            <div onClick={isInvited}>
                <div>  
                    <Person {...this.props}/>
                </div>  
            </div>
          )
  }  
    
}


