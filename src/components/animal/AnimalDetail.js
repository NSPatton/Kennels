import React, { useState, useEffect } from "react";
import { getAnimalById } from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import { useParams, useHistory, Link } from "react-router-dom"

export const AnimalDetail = () => {
    const [animal, setAnimal] = useState({ name: "", breed: "" });
    const [isLoading, setIsLoading] = useState(true);

    const { animalId } = useParams();
    const history = useHistory();

    useEffect(() => {
        //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
        console.log("useEffect", animalId)
        getAnimalById(animalId)
            .then(animal => {
                setAnimal({
                    name: animal.name,
                    breed: animal.breed,
                    location: animal.location,
                    customer: animal.customer
                });
                setIsLoading(false);
            });
    }, [animalId]);


    const handleDelete = () => {
        setIsLoading(true);
        delete (animalId).then(() =>
            history.push("/animals")
        );
    };

    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">{animal.breed}</div>
            {/* What's up with the question mark???? See below.*/}
            <div className="animal__location">Location: {animal.location?.name}</div>
            <div className="animal__owner">Customer: {animal.customer?.name}</div>
            <Link to={`/animals/`}>
                <button>Return</button>
            </Link>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Discharge
        </button>
        </section>
    );
};
