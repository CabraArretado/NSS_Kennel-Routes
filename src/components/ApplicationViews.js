import { Route } from "react-router-dom";
import React from "react";

import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import EmployeeList from "./employees/EmployeeList";
import OwnerList from "./owner/OwnerList";

const ApplicationViews = () => {
    return (
        <React.Fragment>

            <Route
                exact
                path="/"
                render={props => {
                    return <Home />;
                }}
            />

            <Route
                exact
                path="/animals"
                render={props => {
                    return <AnimalList />;
                }}
            />
            <Route
                exact
                path="/locations"
                render={props => {
                    return <>
                        <LocationList />
                    </>
                }} />
            <Route
                path="/employees"
                render={props => {
                    return <>
                        <EmployeeList />
                    </>
                }} />
            <Route
                path="/owners"
                render={props => {
                    return <OwnerList />
                }} />
            <Route
                path="/animals/:animalId(\d+)"
                render={(props) => {
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
                }} />
            <Route
                path="/locations/:locationId(\d+)"
                render={(props) => {
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)} />
                }} />
        </React.Fragment>
    );
};

export default ApplicationViews;