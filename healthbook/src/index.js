import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import user_icon from './user_icon.webp';
import password_icon from './password_icon.webp';
import email_icon from './email_icon.webp';

class Signin_box extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            loggedin: false,
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

    render() {
        if (this.state.loggedin) {
            return (
                <div className="signing_box"> 
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
            );
        }
        else {
            return (
                <div className="signing_box"> 
                    <span>Welcome to Healthbook</span>
                    <form className="input_form">
                        <img class="icon" src={user_icon}/>
                        <input type="txt" placeholder="username"/> <br/>
                        <img class="icon" src={password_icon}/>
                        <input type="password" placeholder="password"/> <br/>
                        <input id="acc_signin" type="submit" value="Log-in"/> <br/>
                        <button className="login_out_btn" onClick={() => this.logginin()}>Register an account</button>
                    </form>
                </div>
            );
        }
    }
}

ReactDOM.render(
    <Signin_box />,
    document.getElementById('root')
);