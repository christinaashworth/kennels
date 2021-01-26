import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

export const AnimalDetail = () => {
  const { getAnimalById, releaseAnimal } = useContext(AnimalContext)
	const [animal, setAnimal] = useState({})
  const {animalId} = useParams();
  const history = useHistory();

  useEffect(() => {
    getAnimalById(animalId)
    .then((response) => {
      setAnimal(response)
    })
    }, []);

    const handleRelease = () => {
      releaseAnimal(animal.id)
        .then(() => {
          history.push("/animals")
        })
    };

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <button onClick={handleRelease}>Be free!</button>

    </section>
  );
};