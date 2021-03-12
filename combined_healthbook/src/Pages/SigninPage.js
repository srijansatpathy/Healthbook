import React from 'react';
import axios from 'axios';
import user_icon from '../Images/user_icon.webp';
import password_icon from '../Images/password_icon.webp';
import email_icon from '../Images/email_icon.webp';
import logo_main from '../Images/final_logo.png';
import Dashboard from '../Pages/Dashboard.js';
import  NavigationTab from '../Navigation/NavigTab.js';
import {BrowserRouter as Router, Switch, Route, Link} 
from 'react-router-dom';
import '../Navigation/NavigTab.css'
import { RiStickyNoteLine } from 'react-icons/ri';
import RegisterBox from "../Pages/RegisterPage.js";

export var checkadmin = "true";   
// global variable for Navigation 
// (need to be fiexed later)

export function DataInfo()  {

    // Username infor
    return checkadmin;

};

class SigninBox extends React.Component {
    constructor(props) {
        super(props);  

        this.state = {
            loggedin: false,
            isUser: false,
            isAdmin: true,
            userName: "",
            email: "",
            password: "",
            isRegister: false
        } 

        // bind the event functions to the current class object
        this.inputUsername = 
        this.inputUsername.bind(this);
        this.inputPassword = 
        this.inputPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        let loginData = {}

        // Axio data to Backend server
        axios.post('http://localhost:4000/app/logoutAllUser', loginData)
        .then(response => {
            console.log("loggedo out")
        })
        .catch(()=>{
            console.log("Logged out failed")
        })
    }

    // Login and verfication process
    loginSuccess() {
        this.setState({
            isUser: true,
        });
    }
    
    setRegister() {
        this.setState({
            isRegister: true
        })
    }


    // Event Functions
    inputUsername(event) {
        this.setState({
            userName:event.target.value,
        });

    }

    inputPassword(event) {
        this.setState({
            password:event.target.value,
        });

        
    }

    // use to prevent the default refresh of the login page
    onSubmit(event){
        if (this.state.userName == "" || this.state.password == "") {
            alert("invalid input")
            return;
        }
        event.preventDefault();
        
        const loginData = {
            username: this.state.userName,
            password: this.state.password
        }

        

        // Axio data to Backend server
        axios.post('http://localhost:4000/app/login', loginData)
        .then(response => {
            if(response.headers["content-type"].indexOf("text") !== -1) {
                alert(response.data)
            }
            else {
                
                window.location = '/dashboard'
            }
        })
    

    }

    render() {

        // Case 1:  Register process
        if (this.state.isRegister) {
            return (
                
                <RegisterBox />
                
            );
        }

        // Case 2: Login Process
        else {
            checkadmin = "false"
            return (
                <h1><img src={logo_main} width = '288' height= '82'/>
                <div className="signing_box"> 
                    <span className="box_message">Welcome</span>
                    <form className="input_form" onSubmit={this.onSubmit}>
                        <img className="icon" src={user_icon}/>
                        <input type="txt" placeholder="username"
                               onChange={this.inputUsername}
                               value = {this.state.userName}
                               className="form-control form-group"
                        /> <br/>

                        <img className="icon" src={password_icon}/>
                        <input type="password" placeholder="password"
                               onChange={this.inputPassword}
                               value = {this.state.password}
                               className="form-control form-group"
                        /> <br/>

                        <input id="acc_signin" type="submit" value="Log in" 
                        onClick={() => this.loginSuccess()}>
                        </input> <br/>
                        <button className="login_out_btn" 
                        onClick={() => this.setRegister()}>
                        Register an account</button>
                    </form>
                </div>
                </h1>
            );
        }


    }
}





// Export data by using get functions
export default SigninBox;

