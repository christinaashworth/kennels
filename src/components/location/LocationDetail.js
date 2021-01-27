import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import "./Location.css";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';


export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext);
	const [location, setLocation] = useState({})
  const {locationId} = useParams();
  const history = useHistory();
  
  const nameFunction = (array) => {
    if (array) {
    return array.map(obj => obj.name).join(", ")
    }
  };
  const animalNames = nameFunction(location.animals);
  const employeeNames = nameFunction(location.employees);

  useEffect(() => {
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    }, []);

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div><br></br>
      <div className="location__animals">Current Residents: {animalNames}</div>
      <div className="location__employees"> Employees: {employeeNames}</div>
      <button onClick={() => {
        history.push(`/locations/edit/${location.id}`)
      }}>Edit</button>
    </section>
  )
};