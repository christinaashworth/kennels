import React from "react";
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

import "./Kennel.css";
import "./animal/Animal.css";
import "./customer/Customer.css";
import "./employee/Employee.css";
import "./location/Location.css";


export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
);