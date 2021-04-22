import React from 'react'
import {Redirect, Route} from 'react-router-dom'

class authentication {
    constructor(){
        this.authenticated = false
    }

    login(cb){
        this.authenticated = true
        cb()
    }

    logout(cb){
        this.authenticated = false
        cb()
    }

    verified = () => {
        return this.authenticated
    }
}

export const safePathway = ({component: Component, ...rest}) => {

    return(
        <Route {...rest} render={
            (props) => {
                if(authentication.verified()){
                  return <Component {...props}/>
                }
               else {
                   return <Redirect to={
                       {
                       pathname:"/",
                       state:{
                           from: props.location
                       }
                    }
                }/>
               }
            }
        }/>
    )

}

export default new authenticated