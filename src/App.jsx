import "./App.css";
import { useState, useEffect } from "react";
import Card from "./Card";
import "./card.css";
import BusCard from "./BusCard";
import Input from "./Input";

function App() {
  const [passengers, setPassengers] = useState([]);
  const [sales, setSales] = useState(0);
  const [bus1, setBus1] = useState([]);
  const [bus2, setBus2] = useState([]);
  const [bus3, setBus3] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/troy1129/jsonplaceholder/passengers"
    )
      .then((res) => res.json())
      .then((data) => setPassengers(data));
  }, []);

  return (
    <>
      <h1>Sales: PHP {sales} </h1>

      <Input setPassengers={setPassengers} passengers={passengers}></Input>

      <div className="cards">
        {passengers.map((passenger) => {
          return (
            <Card
              name={passenger.name}
              id={passenger.id}
              key={passenger.id}
              setSales={setSales}
              setPassengers={setPassengers}
              setBus1={setBus1}
              setBus2={setBus2}
              setBus3={setBus3}
            ></Card>
          );
        })}
      </div>
      <p>bus 1:</p>
      {bus1.map((passenger) => {
        return (
          <BusCard
            key={passenger.id}
            name={passenger.name}
            id={passenger.id}
            destination={passenger.destination}
          ></BusCard>
        );
      })}
      <p>bus 2:</p>
      {bus2.map((passenger) => {
        return (
          <BusCard
            key={passenger.id}
            name={passenger.name}
            id={passenger.id}
            destination={passenger.destination}
          ></BusCard>
        );
      })}
      <p>bus 3:</p>
      {bus3.map((passenger) => {
        return (
          <BusCard
            key={passenger.id}
            name={passenger.name}
            id={passenger.id}
            destination={passenger.destination}
          ></BusCard>
        );
      })}
    </>
  );
}

export default App;
