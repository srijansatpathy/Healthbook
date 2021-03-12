import React, { Component } from 'react'
import Card from './CardUI';
import axios from 'axios'

import me from '../Images/user_image.webp';
import vaccine from '../Images/economics-of-vaccinations.jpg';
import health from '../Images/wcs-health-chech.png';
import NavigationTab from '../Navigation/NavigTab';
import { FaChevronCircleDown, FaLuggageCart } from 'react-icons/fa';

class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:"",
            fullname:"asd",
            id:"",
            age:0,
            email:"",
            gender:"",
            text1: false,
            text2: false,
            text3: false,
            text4: false,
            adminStatus: "true"
        }

        this.updateVacc = this.updateVacc.bind(this)
    }
    
    componentDidMount() {
        const loginData = {isAdmin: true}
        axios.get('http://localhost:4000/app/getLoggedInUser', loginData)
        .then(response => {
            if(response.headers["content-type"].indexOf("text") !== -1) {
                alert(response.data)
            }
            else {
                this.setState({
                    username: response.data.username,
                    fullname: response.data.fullname,
                    id: response.data._id.substring(1,10),
                    age: response.data.age,
                    gender: response.data.gender,
                    email: response.data.email,
                    text1: response.data.vaccination_covid,
                    text2: response.data.vaccination_flue,
                    text3: response.data.vaccination_tuber,
                    text4: response.data.health_check_physical,
                });
            }
        })
    }

    updateVacc(whichAcc) {
        const updateData = {
            username: this.state.username,
            vaccination_covid: this.state.text1 | whichAcc === 1,
            vaccination_flue: this.state.text2 | whichAcc === 2,
            vaccination_tuber: this.state.text3 | whichAcc === 3,
            health_check_physical: this.state.text4 | whichAcc === 4,
        }
        console.log(this.state.text2)
        axios.post('http://localhost:4000/app/updateVacc', updateData)
        .then(response=> {
            console.log("Update success")
        })
        .catch(() => {
            console.log("error occurred")
        })
    }

    covid_update_action = () => {
        this.setState({
            text1: true,
        });
        this.updateVacc(1)
    }
    flue_update_action = () => {
        this.setState({
            text2: true,
        });
        this.updateVacc(2)
    }
    tb_update_action = () => {
        this.setState({
            text3: true,
        });
        this.updateVacc(3)
    }
    physical_update_action = () => {
        this.setState({
            text4: true,
        });
        this.updateVacc(4)
    }
      
    render() {
        return (
            <>
            <NavigationTab admin={this.state.adminStatus} />
            <div className=
            "flexbox-container">
                {/* <div className="row"> */}
                    <div className="col-md-4">
                        <Card imgsrc={me} title={this.state.fullname}
                        body1={"ID : " + this.state.id}
                        body2={"Age : " + this.state.age}
                        body3={"Email : " + this.state.email}
                        body4={"Gender : " + this.state.gender}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={vaccine} title="Vaccinations"
                        body1={"Covid Vaccination : " + (this.state.text1 
                                ? "Done" : "To do")}
                        body2={"Influenza Vaccination : " + (this.state.text2 
                                ? "Done" : "To do")}
                        body3={"Tuberculosis Vaccination : " + (this.state.text3 
                                ? "Done" : "To do")}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={health} title="Health Check"
                        body1={"Physical Test : " + (this.state.text4 ? "Done" : "To do")}
                        b1="Mental Health"
                        b2="Harrassment"/>
                    </div>
                {/* </div> */}
            </div>
            <div className="update_list">
                <button onClick={this.covid_update_action} 
                        className="update_btn">Update Covid-19</button>
                <button onClick={this.flue_update_action} 
                        className="update_btn">Update Influenza</button>
                <button onClick={this.tb_update_action} 
                        className="update_btn">Update Tuberculosis</button>
                <button onClick={this.physical_update_action} 
                    className="update_btn">Update Physical health check</button>
            </div>
            </>
        );
    }
}

export default Cards;