import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalList } from "./animal/AnimalList";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationList } from "./location/LocationList";


export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <AnimalProvider>
        <Route path="/animals">
          <h2>Animals</h2>
            <article className="animals"> 
              <AnimalList />
            </article>           
        </Route>
      </AnimalProvider>

      <CustomerProvider>
        <Route path="/customers">
        <h2>Customers</h2>
          <article className="customers">
            <CustomerList />
          </article>
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <Route path="/employees">
        <h2>Employees</h2>
          <article className="employees">
          <EmployeeList />
          </article>
        </Route>
      </EmployeeProvider>

      <LocationProvider>
        <Route path="/locations">
        <h2>Locations</h2>
          <article className="locations">
          <LocationList />
        </article> 
        </Route>
      </LocationProvider>
    </>
      );
    };

