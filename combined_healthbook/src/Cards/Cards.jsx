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
    onClickButton = () => {
        this.setState({
            text1: "COVID-19: Done",
            text2: "INFLUENZA: Done",
            text3: "TUBERCULOSIS: Done",
            text4: "Physical: Done"
        });
      }
    render() {
        return (
            <>
            <NavigationTab />
            <div className=
            "flexbox-container">
                <button onClick={this.onClickButton}>Complete</button>
                {/* <div className="row"> */}
                    <div className="col-md-4">
                        <Card imgsrc={me} title="Srijan Satpathy (UCLA)"
                        body1="ID: 123456789"
                        b1="Update profile"
                        b2="Report user"
                        b3="Sign out"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={vaccine} title="Vaccinations"
                        body1={this.state.text1}
                        body2={this.state.text2}
                        body3={this.state.text3}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={health} title="Health Check"
                        body1={this.state.text4}
                        b1="Mental Health"
                        b2="Harrassment"/>
                    </div>
                {/* </div> */}
            </div>
            </>
        );
    }
}

export default Cards;