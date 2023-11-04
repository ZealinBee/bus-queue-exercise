import "./card.css";
import { useState, useEffect } from "react";

function Card({
  name,
  id,
  setSales,
  setPassengers,
  setBus1,
  setBus2,
  setBus3,
}) {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/troy1129/jsonplaceholder/destinations"
    )
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  function cityClickHandler(price, passengerId, destination) {
    setSales((prevSales) => prevSales + price);
    if (destination === "Cebu" || destination === "Mandaue") {
      setBus1((prevBus1) => [
        ...prevBus1,
        {
          name: name,
          id: passengerId,
          destination: destination,
        },
      ]);
    } else if (destination === "Lilo-an" || destination === "Lapu-Lapu") {
      setBus2((prevBus2) => [
        ...prevBus2,
        {
          name: name,
          id: passengerId,
          destination: destination,
        },
      ]);
    } else if (destination === "Talisay" || destination === "Consolation") {
      setBus3((prevBus3) => [
        ...prevBus3,
        {
          name: name,
          id: passengerId,
          destination: destination,
        },
      ]);
    }
    setPassengers((prevPassengers) =>
      prevPassengers.filter((passenger) => passenger.id !== passengerId)
    );
  }

  return (
    <div className="card">
      <p> {name} </p>
      <p>Ticket Id: {id}</p>
      <div className="cities">
        {cities.map((city) => {
          return (
            <button
              key={city.id}
              onClick={() => cityClickHandler(city.price, id, city.destination)}
            >
              {city.destination}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
