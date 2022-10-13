import "./App.css";
import Dogs from "./components/Dogs";
import SingleDog from "./components/SingleDog";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import NewDogForm from "./components/NewDogForm";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <NavBar className="navbar" />
      <Routes>
        <Route path="/" element={<Dogs />} />
        <Route path="/newDogForm" element={<NewDogForm />} />
        <Route path="/players/:dogId" element={<SingleDog />} />
      </Routes>
    </div>
  );
}

export default App;
