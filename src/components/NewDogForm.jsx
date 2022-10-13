import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPupper } from "../assets/ajaxHelpers/players";
import Button from "react-bootstrap/Button";
import styles from "../styles/NewDogForm.module.css";
export default function NewDogForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createPupper(name, breed);
          navigate("/");
        }}
      >
        <h3>Create a New Dog</h3>
        <label>Name:</label>
        <input
          value={name}
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Breed:</label>
        <input
          value={breed}
          type="text"
          placeholder="breed"
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        />

        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
