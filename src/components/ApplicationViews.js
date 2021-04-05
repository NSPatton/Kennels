import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalCard } from "./animal/AnimalCard";
import { LocationCard } from "./location/LocationCard";
//import { CustomerCard } from "./customer/CustomerCard";
import { EmployeeCard } from "./employee/EmployeeCard";

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalCard />
                <AnimalCard />
                <AnimalCard />

            </Route>

            <Route path="/locations">

                <LocationCard />
                <LocationCard />

            </Route>

            <Route path="/employees">

                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />

            </Route>
        </>
    )
}