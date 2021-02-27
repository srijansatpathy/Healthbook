import React from 'react';
import user_icon from '../Images/user_icon.webp';
import password_icon from '../Images/password_icon.webp';
import email_icon from '../Images/email_icon.webp';
import logo_main from '../Images/final_logo.png';
import Dashboard from '../Pages/Dashboard.js';
import  NavigationTab from '../Navigation/NavigTab.js';
import {BrowserRouter as Router, Switch, Route, Link} 
from 'react-router-dom';
import '../Navigation/NavigTab.css'

class SigninBox extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            loggedin: false,
            isUser: false,
            isAdmin: true,
        } 
    }

    logginin() {
        this.setState({
            loggedin: true,
        });
    }

    logginout() {
        this.setState({
            loggedin: false,
        });
    }

    loginSuccess() {
        this.setState({
            isUser: true,
        });
    }

    render() {

        // Case 1: is user mode 
        if (this.state.isUser) {

            // Sub case: check if admin mode
            if(this.state.isAdmin) {

                return (
                    <NavigationTab admin="true"/>
                );
            }
            
        }

        // Case 2 & 3: login process 
        else if (this.state.loggedin) {
            return (
                <h1><img src={logo_main} width = '288' height= '82'/>
                
                <div className="signing_box" >
                     
                    <span>Register an account</span>
                    <form className="input_form">
                        <img class="icon" src={user_icon}/>
                        <input type="txt" placeholder="username"/> <br/>
                        <img class="icon" src={email_icon}/>
                        <input type="email" placeholder="email"/> <br/>
                        <img class="icon" src={password_icon}/>
                        <input type="password" placeholder="password"/> <br/>
                        <input id="acc_signup" type="submit" value="Signup"/> <br/>
                        <button className="login_out_btn" onClick={() => this.logginout()}>Go back to login</button>
                    </form>
                </div>
                </h1>
                
            );
        }
        else {
            return (
                <h1><img src={logo_main} width = '288' height= '82'/>
                <div className="signing_box"> 
                    <span>Welcome</span>
                    <form className="input_form">
                        <img class="icon" src={user_icon}/>
                        <input type="txt" placeholder="username"/> <br/>
                        <img class="icon" src={password_icon}/>
                        <input type="password" placeholder="password"/> <br/>
                        <input id="acc_signin" type="submit" value="Log-in" onClick={() => this.loginSuccess()}>
                        </input> <br/>
                        <button className="login_out_btn" onClick={() => this.logginin()}>Register an account</button>
                    </form>
                </div>
                </h1>
            );
        }

    }
}

export default SigninBox;