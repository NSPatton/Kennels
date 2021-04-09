export const AnimalList = () => {

    const [animals, setAnimals] = useState([]);
  
    // ...code omitted for brevity...
  
    return(
      <div className="container-cards">
        {animals.map(animal =>
          <AnimalCard key={animal.id} animal={animal} />
        )}
      </div>
    );
  };