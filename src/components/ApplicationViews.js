import { Route, Redirect } from "react-router-dom";
import React from "react";

import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from "./location/LocationForm";
import EmployeeList from "./employees/EmployeeList";
import OwnerList from "./owner/OwnerList";
import Login from "./auth/Login";

const ApplicationViews = () => {
    // Check if credentials are in session storage returns true/false
    const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
    return (
        <React.Fragment>

            <Route
                exact
                path="/"
                render={props => {
                    return <Home />;
                }}
            />

            <Route exact path="/animals" render={props => {
                if (isAuthenticated()) {
                    return <AnimalList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route exact path="/locations" render={props => {
                if (isAuthenticated()) {
                    return <LocationList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route exact path="/employees" render={props => {
                if (isAuthenticated()) {
                    return <EmployeeList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route exact path="/owners" render={props => {
                if (isAuthenticated()) {
                    return <OwnerList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route
                path="/animals/:animalId(\d+)"
                render={(props) => {
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
                }} />
            <Route
                path="/animals/edit/:animalId(\d+)"
                render={(props) => {
                    return <AnimalEditForm animalId={parseInt(props.match.params.animalId)} {...props} />
                }} />
            <Route
                path="/locations/:locationId(\d+)"
                render={(props) => {
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
                }} />
            <Route path="/animals/new" render={(props) => {
                return <AnimalForm {...props} />
            }} />
            <Route path="/locations/new" render={(props) => {
                return <LocationForm {...props} />
            }} />
            <Route path="/login" component={Login} />
        </React.Fragment>
    );
};

export default ApplicationViews;