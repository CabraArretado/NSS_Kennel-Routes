import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Delete function. No return
  const deleteAnimal =(id) => {
    setIsLoading(true);
    AnimalManager.delete(id).then(data => props.history.push("/animals"))
  }

  useEffect(() => {AnimalManager.get(props.animalId).then(data => {setAnimal(data);});
      setIsLoading(false);
  }, [props.animalId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={animal.picture} alt="My Dog" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
      </div>
      <button type="button" disabled={isLoading} onClick={() => { deleteAnimal(animal.id) }}>Put to sleep</button>
    </div>
  );
}

export default AnimalDetail;