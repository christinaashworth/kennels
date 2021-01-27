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
import { AnimalForm } from "./animal/AnimalForm";
import { EmployeeForm } from "./employee/EmployeeForm";
import { LocationForm } from "./location/LocationForm";
import { AnimalDetail } from "./animal/AnimalDetail";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { LocationDetail } from "./location/LocationDetail";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route exact path="/animals">
              <AnimalList />
            </Route>
            <Route path="/animals/create">
              <AnimalForm />
            </Route>
            <Route exact path="/animals/detail/:animalId(\d+)">
		          <AnimalDetail />
	          </Route>
            <Route path="/animals/edit/:animalId(\d+)">
              <AnimalForm />
            </Route>
          </CustomerProvider>
        </LocationProvider>
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
        <LocationProvider>
        <Route exact path="/employees">
        <h2>Employees</h2>
          <article className="employees">
          <EmployeeList />
          </article>
        </Route>
        <Route path="/employees/create">
          <EmployeeForm />
        </Route>
        <Route exact path="/employees/detail/:employeeId(\d+)">
		      <EmployeeDetail />
	      </Route>
        <Route path="/employees/edit/:employeeId(\d+)">
          <EmployeeForm />
        </Route>
        </LocationProvider>
      </EmployeeProvider>

      <LocationProvider>
        <Route exact path="/locations">
          <article className="locations">
          <LocationList />
        </article> 
        </Route>
        <Route path="/locations/create">
          <LocationForm />
        </Route>
        <Route exact path="/locations/detail/:locationId(\d+)">
		      <LocationDetail />
	      </Route>
        <Route path="/locations/edit/:locationId(\d+)">
          <LocationForm />
        </Route>
      </LocationProvider>
    </>
      );
    };

