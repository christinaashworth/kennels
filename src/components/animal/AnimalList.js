import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider";
import { AnimalCard } from "./AnimalCard";
import "./Animal.css";

export const AnimalList = () => {
  const { animals, getAnimals } = useContext(AnimalContext);

  const history = useHistory();

  useEffect(() => getAnimals, []);


  return (
    <div className="animals">
       <h2>Animals</h2>
      <button onClick={() => {history.push("/animals/create")}}>
            Add Animal
          </button>
      {
        animals.map(animal => {
          return <AnimalCard key={animal.id} animal={animal} />
        })
      }
    </div>
  );
};