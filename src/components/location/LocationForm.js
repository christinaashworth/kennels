import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../location/LocationProvider";
import "./Location.css";
import { useHistory, useParams } from 'react-router-dom';

export const LocationForm = () => {
  const { addLocation, getLocationById, updateLocation } = useContext(LocationContext);

    //for edit, hold on to state of location in this view
    const [location, setLocation] = useState({
      name: "",
      address: ""
    });

    //wait for data before button is active. Look at the button to see how it's setting itself to disabled or not based on this state
    const [isLoading, setIsLoading] = useState(true);

    // Now that the form can be used for editing as well as adding a location, you need access to the location id for fetching the location you want to edit
    const { locationId } = useParams();
	  const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newLocation = { ...location }
      //location is an object with properties.
      //set the property to the new value
      newLocation[event.target.id] = event.target.value
      //update state
      setLocation(newLocation)
    };

    const handleSaveLocation = () => {
      //disable the button - no extra clicks
      setIsLoading(true);
      // This is how we check for whether the form is being used for editing or creating. If the URL that got us here has an id number in it, we know we want to update an existing record of a location
      if (locationId){
      //PUT - update
        updateLocation({
            id: location.id,
            name: location.name,
            address: location.address
          })
          .then(() => history.push(`/locations/detail/${location.id}`))
        }else {
          //POST - add
          addLocation({
            name: location.name,
            address: location.address
          })
          .then(() => history.push("/locations"))
        }
    };

    //If locationId is in the URL, getLocationById
    useEffect(() => {
      if (locationId) {
        getLocationById(locationId)
          .then(location => {
              setLocation(location)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      }
    , []);

    return (
      <form className="locationForm">
        <h2 className="locationForm__title">{locationId ? "Edit Location" : "Add Location"}</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="locationName">Location name: </label>
            <input type="text" id="name" required autoFocus className="form-control"
            placeholder="Location name"
            onChange={handleControlledInputChange}
            value={location.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Address" value={location.address}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveLocation()
          }}>
        {locationId ? "Save Location" : "Add Location"}</button>
      </form>
    )
};