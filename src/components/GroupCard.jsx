import "./Groupcard.css";

function GroupCard({ groupName }) {
  return (
    <div className="group-card z-20 bg-white hover:bg-gray-300">
      <div className="card-content gap-4">
        <h2>Join <br/> 
        <span className="colorful-text uppercase ">{groupName} </span>
          <br/>  VIP Group</h2>
      </div>
    </div>
  );
}

export default GroupCard;