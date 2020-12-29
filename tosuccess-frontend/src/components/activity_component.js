import ActivityTable from '../components/activityTable';
import AddActivityButton from '../components/add_activity_button';

import {Button, Modal, Form, Spinner} from 'react-bootstrap';

import {React, Component} from 'react';
import { FormGroup } from '@material-ui/core';

//Routing
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

//Non-react classes
import test_access_to_backend from "../other/sessionHandler"
import API_Connection from "../other/API_connection"
import DateHandler from "../other/dateHandler"

//TODO: Change format of date so that backends accepts
class ActivityComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            activityName : "",
            activityDate : "",
            activityStartTime : "",
            activityEndTime : "",
            showHide : false,
            loading : true,

            backend_access_token: null,
        }

        let routeState;
        if(this.props.location.state){
            localStorage.setItem('routeState', JSON.stringify(this.props.location.state));
            routeState = this.props.location.state;
        } else {
            routeState = localStorage.getItem('routeState');
            if(routeState) routeState = JSON.parse(routeState);
        }
        this.state.backend_access_token = routeState.backend_access_token; //Does this to avoid update of page

        this.api_connection = new API_Connection(this.state.backend_access_token); //We still keep this object and pass it into the table. Still need it to post
        this.dateHandler = new DateHandler();
    }

    //Handle input in fab
    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    submitHandler(){
        //This is where you handle the input given. The previous functions should have changed the states to reflect the value inputed. Just use this.state.activityName for instance
        alert("Name: " + this.state.activityName +
                "\n Date:" + this.state.activityDate +
                "\n Start Time: " + this.state.activityStartTime +
                "\n End Time: " + this.state.activityEndTime);
        this.api_connection.post_activity(this.state.activityName, 0, 0, 363, this.dateHandler.convertDateToDDMMMMYYYY(this.state.activityDate));
        this.handleModalShowHide(); //Possible solution for reloading. When setState is called the entire constructor gets called again. When this happens this.props.location.state is undefined.
                                    //Solution: Set new state with information you het from this.props.location state and chekc if these are correct. If not then push to /landing
    }

    render(){
        return(
            <div>
                <h1>Hello NAME, here is your activities!</h1>
                {/* The rest of the page */}
                <ActivityTable backendAccessToken={this.state.backend_access_token} api_connection={this.api_connection} />
                <AddActivityButton handleClick={() => this.handleModalShowHide()} />

                {/* Modal */}
                {/*TODO: Is there a way to place the modal inside a component? */}
                <Modal show={this.state.showHide} centered>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Add activity</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.submitHandler}>
                        <Modal.Body>
                            <FormGroup controlId="formActivityName">
                                <Form.Label>Activity Name:</Form.Label>
                                <Form.Control type="string" placeholder="Enter activity name..." onChange={e => this.setState({ activityName: e.target.value })}/>
                            </FormGroup>
                            <FormGroup controlId="formDate">
                                <Form.Label>Date:</Form.Label>
                                <Form.Control type="date" onChange={e => this.setState({ activityDate: e.target.value })} />
                            </FormGroup>
                            <FormGroup controlId="formStartTime">
                                <Form.Label>Start Time:</Form.Label>
                                <Form.Control type="time" onChange={e => this.setState({ activityStartTime: e.target.value })} />
                            </FormGroup>
                            <FormGroup controlId="formEndTime">
                                <Form.Label>End Time:</Form.Label>
                                <Form.Control type="time" onChange={e => this.setState({ activityEndTime: e.target.value })} />
                            </FormGroup>
                        </Modal.Body>
                        <Modal.Footer>   
                            <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit" onClick={() => this.submitHandler()}>
                                Add Activity
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

            </div>
        )
    }
    
}

export default withRouter(ActivityComponent);
