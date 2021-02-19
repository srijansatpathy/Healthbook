import React from 'react';
import user_icon from './user_icon.webp';
import password_icon from './password_icon.webp';
import email_icon from './email_icon.webp';
import Table from './components/table';


class SigninBox extends React.Component {
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

function App() {
    const columns = React.useMemo(
        () => [
          {
            Header: 'User Info',
            columns: [
              {
                Header: 'Name',
                accessor: 'name',
    
              },
              {
                Header: 'Age',
                accessor: 'age',
    
              },
              {
                Header: 'Email',
                accessor: 'email',
    
              },
            ],
          },
          {
            Header: 'Health Info',
            columns: [
              {
                Header: 'covid vaccination',
                accessor: 'covid',
              },
              {
                Header: 'other',
                accessor: 'other',
              },
            ],
          },
        ],
        []
      )
    
      const data = React.useMemo(() =>
      [
      {
      name: 'Kim Parrish',
      age: 23,
      email: 'jfeifjeoi@gmail',
      covid: 'false',
      other: 'other',
      },
      {
      name: 'Michele Castillo',
      age: 34,
      email: 'ghijidsasnf@gmail',
      covid: 'false',
      other: 'other',
      },
      {
      name: 'Eric Ferris',
      age: 23,
      email: 'jfeifjfefei@gmail',
      covid: 'false',
      other: 'other',
      },
      {
      name: 'Gloria Noble',
      age: 56,
      email: 'jfeifdsdoi@gmail',
      covid: 'false',
      other: 'other',
      },
      {
      name: 'Darren Daniels',
      age: 45,
      email: 'jfeiffwefwefjeoi@gmail',
      covid: 'false',
      other: 'other',
      },
      {
      name: 'Ted McDonald',
      age: 32,
      email: 'jfeifceceejeoi@gmail',
      covid: 'false',
      other: 'other',
      },
      ],
      []
     )

    return (
      <main className="container">
        {/* <SigninBox /> */}
        <Table columns={columns} data={data} />
      </main>
    );
  }

  export default App;