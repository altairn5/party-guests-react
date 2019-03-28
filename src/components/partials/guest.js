import React, { Component } from 'react';
import { dispatch } from 'rxjs/internal/observable/pairs';

export default class Guest extends Component {

  state = {
      isInvited: false
  }

  render () {

    const isInvited = () => { 
        this.props.dispatch({
            type: "INVITED",
            payload: this.props
        })
    }

    const toggleClass = `${this.state.isInvited ? "hidden" : "" }`


      return (  
            <div onClick={isInvited}>
                <div className= {toggleClass}>  
                    <div className="user-name">{this.props.name}</div>
                    <div className="user-username">{this.props.username}</div>
                    <div className="user-email">{this.props.email}</div>
                </div>  
            </div>
          )
  }  
    
}


