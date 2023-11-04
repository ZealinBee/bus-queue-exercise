import "./card.css"

function BusCard({name, id, destination}) {
  return (
    <div className="bus-card">
        <p>{name}</p>
        <p>Ticket Id: {id}</p>
        <p>Destination: {destination}</p>
    </div>
  )
}

export default BusCard