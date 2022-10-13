import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deletePupperById, fetchPupper } from "../assets/ajaxHelpers/players";
import Button from "react-bootstrap/Button";
function SingleDog() {
  const navigate = useNavigate();

  const { dogId } = useParams();
  console.log("dogId is", dogId);
  const [singleDog, setSingleDog] = useState({});

  useEffect(() => {
    async function getPupperById() {
      const pupper = await fetchPupper(dogId);
      setSingleDog(pupper);
    }

    getPupperById();
  }, []);
  async function handleDelete() {
    const result = await deletePupperById(singleDog.id);
    navigate("/");
  }

  return (
    <div className="singledogcard">
      <h3>{singleDog.name}</h3>
      <h4>ID:{singleDog.id}</h4>
      <img className="dogpics" src={singleDog.imageUrl} />
      <h4>{singleDog.breed}</h4>
      <Button variant="outline-dark" onClick={handleDelete}>
        Thanos Snap
      </Button>
    </div>
  );
}

export default SingleDog;
