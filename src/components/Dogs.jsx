import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPuppers } from "../assets/ajaxHelpers/players";
import Button from "react-bootstrap/Button";
function Dogs() {
  const navigate = useNavigate();
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    async function getAllPuppies() {
      const puppies = await fetchAllPuppers();
      setDogs(puppies);
    }
    getAllPuppies();
  }, []);

  return (
    <div className="layout">
      {dogs.map((dog) => {
        return (
          <div className="dogcard" key={dog.id}>
            <h3>{dog.name}</h3>
            <h4>ID:{dog.id}</h4>
            <img className="dogpics" src={dog.imageUrl} />
            <h4>{dog.breed}</h4>

            <Button
              variant="success"
              onClick={() => {
                navigate(`/players/${dog.id}`);
              }}
            >
              See Details
            </Button>
          </div>
        );
      })}
    </div>
  );
}
export default Dogs;
