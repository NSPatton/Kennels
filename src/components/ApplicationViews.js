import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList";
import { LocationCard } from "./location/LocationCard";
import { CustomerCard } from "./customer/CustomerCard";
import { EmployeeCard } from "./employee/EmployeeCard";
import { AnimalDetail } from "./animal/AnimalDetail";
import { AnimalForm } from './animal/AnimalForm'
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { AnimalEditForm } from "./animal/AnimalEditForm"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            {/* Make sure you add the `exact` attribute here */}
            <Route exact path="/animals">
                <AnimalList /> :
            </Route>

            <Route path="/animals/:animalId(\d+)/edit">
                <AnimalEditForm />
            </Route>


            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>

            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route exact path="/animals/create">
                <AnimalForm />
            </Route>

            {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}

            <Route path="/locations">
                <LocationCard />
                <LocationCard />
            </Route>

            <Route path="/customers">
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
            </Route>


            <Route path="/employees">
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
            </Route>
        </>
    )
}