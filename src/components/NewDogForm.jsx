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
        className={styles.dogform}
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createPupper(name, breed);
          navigate("/");
        }}
      >
        <h3>Create a New Dog</h3>
        <label className={styles.inputlabel}>Name:</label>
        <input
          className={styles.inputlabel}
          value={name}
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label className={styles.inputlabel}>Breed:</label>
        <input
          className={styles.inputlabel}
          value={breed}
          type="text"
          placeholder="breed"
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        />

        <Button
          className={styles.button}
          variant="outline-primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
