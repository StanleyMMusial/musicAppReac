import React, { Component } from 'react'
import{ AppBar}from '@material-ui/core/'
import ToolBar from '@material-ui/core/Toolbar'
import authentication from '../verify'
import "./navbar.css"

class Navbar extends Component {
    constructor(props){
        super(props)

        this.state = {
            loggedIn: false,
            LogButton: "Login",
            loginUsername: <input placeholder="username"></input>,
            loginPassword: <input placeholder="password"></input>
        }
    }

    handleClick = () => {
        if(this.state.loggedIn){
            this.setState({loggedIn: false});
            this.setState({LogButton: "Login"});
            this.setState({loginUsername:<input placeholder="username"></input>});
            this.setState({loginPassword:<input placeholder="password"></input>});
            authentication.login(()=>{this.props.history.push('/')})
     
        } else {
            this.setState({loggedIn: true});
            this.setState({LogButton: "Logout"});
            this.setState({loginUsername:""});
            this.setState({loginPassword:""});
            authentication.login(()=>{this.props.history.push('/app')})
        }
    }

    render(){
        return(
              
                <AppBar position="static" className="Navbar">
                    <ToolBar className="tools">
                        <div>Stanley's Music App</div>
                        <div>{this.state.loginUsername}</div>
                        <div>{this.state.loginPassword}</div>
                        <button onClick={this.handleClick}>{this.state.LogButton}</button>
                    </ToolBar>
                </AppBar>
            
        )
    }

}

export default Navbar