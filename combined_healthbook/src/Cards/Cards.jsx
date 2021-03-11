import React, { Component } from 'react'
import Card from './CardUI';

import me from '../Images/IMG_0620.jpg';
import vaccine from '../Images/economics-of-vaccinations.jpg';
import health from '../Images/wcs-health-chech.png';
import NavigationTab from '../Navigation/NavigTab';
import { FaChevronCircleDown, FaLuggageCart } from 'react-icons/fa';

class Cards extends Component {
    state = {
        text1: "COVID-19: TODO",
        text2: "INFLUENZA: TODO",
        text3: "TUBERCULOSIS: TODO",
        text4: "Physical: TODO"
    }
    covid_update_action = () => {
        this.setState({
            text1: "COVID-19: Done",
        });
    }
    flue_update_action = () => {
        this.setState({
            text2: "INFLUENZA: Done",
        });
    }
    tb_update_action = () => {
        this.setState({
            text3: "TUBERCULOSIS: Done",
        });
    }
    physical_update_action = () => {
        this.setState({
            text4: "Physical: Done"
        });
    }
      
    render() {
        return (
            <>
            <NavigationTab />
            <div className=
            "flexbox-container">
                {/* <div className="row"> */}
                    <div className="col-md-4">
                        <Card imgsrc={me} title="Srijan Satpathy (UCLA)"
                        body1="ID: 123456789"
                        body2="Age: 20"
                        body3="Email: email@email.com"
                        b1="Update profile"
                        b2="Report user"
                        b3="Sign out"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={vaccine} title="Vaccinations"
                        body1={this.state.text1}
                        body2={this.state.text2}
                        body3={this.state.text3}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={health} title="Health Check"
                        body1={this.state.text4}
                        b1="Mental Health"
                        b2="Harrassment"/>
                    </div>
                {/* </div> */}
            </div>
            <div className="update_list">
                <button onClick={this.covid_update_action} className="update_btn">Update Covid-19</button>
                <button onClick={this.flue_update_action} className="update_btn">Update Influenza</button>
                <button onClick={this.tb_update_action} className="update_btn">Update Tuberculosis</button>
                <button onClick={this.physical_update_action} className="update_btn">Update Physical health check</button>
            </div>
            </>
        );
    }
}

export default Cards;