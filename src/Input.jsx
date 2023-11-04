import "./card.css";
import { useState } from "react";

function Input({ setPassengers, passengers }) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  function formSubmitHandler(e) {
    e.preventDefault();

    let idExists = false;

    passengers.forEach((passenger) => {
      if (passenger.id == id) {
        idExists = true;
      }
    });
    if (idExists) {
      alert("ID already exists");
      return;
    }

    setPassengers((prevPassengers) => [
      ...prevPassengers,
      { name: name, id: id },
    ]);
  }

  function nameChangeHandler(e) {
    setName(e.target.value);
  }

  function idChangeHandler(e) {
    setId(e.target.value);
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <label>Name:</label>
      <input type="text" value={name} onChange={nameChangeHandler} />
      <label>Ticket ID:</label>
      <input type="text" value={id} onChange={idChangeHandler} />
      <button>submit</button>
    </form>
  );
}

export default Input;
