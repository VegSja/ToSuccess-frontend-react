import React from "react";

import {Button} from 'react-bootstrap';
import Login from '../components/Input/Session/login.js';

import { LinkContainer } from "react-router-bootstrap";



import conquer from '../static/img/conquer.jpg';

import '../style/activity_page.css';
import '../style/landing.css';



export default function Landing(){
    console.log("Langing page")
    return(
            <div className="page-contain" class="backgroundDiv">
                <div className="content-left">
                    <h1 class="landingPage">Achieve it!</h1>
                    <p> The daily planner which structures your day in a revolutinary way</p>
                    <LinkContainer to="/activities">
                        <Login />
                    </LinkContainer>
                </div>
            </div>
    );
}