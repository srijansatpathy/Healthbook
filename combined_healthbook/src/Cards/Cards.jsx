import React, { Component } from 'react'
import Card from './CardUI';

import me from '../Images/IMG_0620.jpg';
import vaccine from '../Images/economics-of-vaccinations.jpg';
import health from '../Images/wcs-health-chech.png';

class Cards extends Component {
    render() {
        return (
            <div className=
            "container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={me} title="Srijan Satpathy (UCLA)"
                        body1="ID: 123456789"
                        b1="Update profile"
                        b2="Report user"
                        b3="Sign out"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={vaccine} title="Vaccinations"
                        body1="COVID-19: Done"
                        body2="INFLUENZA: Done"
                        body3="TUBERCULOSIS: Done"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={health} title="Health Check"
                        body1="Physical: Done"
                        b1="Mental Health"
                        b2="Harrassment"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;