import React from "react"

import user_icon from '../Images/user_icon.webp';
import password_icon from '../Images/password_icon.webp';
import email_icon from '../Images/email_icon.webp';
import logo_main from '../Images/final_logo.png';
import SigninBox from '../Pages/SigninPage.js';

class RegisterBox extends React.Component {

    constructor(props){

        super(props)
        // Local variable states
        this.state = {

            userName: "",
            password: "",
            email: "",
            isCompleted: false
        }

        // Bind the event functions
        this.inputUsername = 
        this.inputUsername.bind(this);
        this.inputPassword = 
        this.inputPassword.bind(this);
        this.inputEmail = 
        this.inputEmail.bind(this);

        this.onSumbit = this.onSumbit.bind(this);
    }


    completeRegister () {
        this.setState({
            isCompleted: true
        });
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

    inputEmail(event) {
        this.setState({
            email:event.target.value,
        });
    }

    onSumbit (event) {
        event.preventDefault();

        const registerData = {
            userName: this.state.userName,
            password: this.state.password,
            isAdmin: this.state.isAdmin,
        }

        // Verify the sign up process
        if(this.state.isCompleted)
            window.location = '/';

        // Axios input data session

    }


    render () {

        if(!this.isCompleted){
            return(
                <h1><img src={logo_main} width = '288' height= '82'/>
                    
                    <div className="signing_box" >
                         
                        <span>Register an account</span>
                        <form className="input_form" onSumbit={this.onSubmit}>
                            <img className="icon" src={user_icon}/>
                            <input type="txt" placeholder="username"
                                   onChange={this.inputUsername}
                                   value = {this.state.userName}
                                   className="form-control form-group"
                            /> <br/>

                            <img className="icon" src={email_icon}/>
                            <input type="email" placeholder="email"
                                   onChange={this.inputEmail}
                                   value = {this.state.email}
                                   className="form-control form-group"
                            /> <br/>

                            <img className="icon" src={password_icon}/>
                            <input type="password" placeholder="password"
                                   onChange={this.inputPassword}
                                   value = {this.state.password}
                                   className="form-control form-group"
                            /> <br/>

                            <input id="acc_signup" type="submit" value="Signup"/>
    
                             <br/>
                            <button className="login_out_btn" 
                            onClick={() => this.completeRegister()}>Go back to login</button>
                        </form>
                    </div>
                    </h1>
            )

        }

        else {
            return(
                <SigninBox name={this.state.userName}
                           email={this.state.email}
                           password={this.state.password} />
            );
        }
        
    }
}


export default RegisterBox;