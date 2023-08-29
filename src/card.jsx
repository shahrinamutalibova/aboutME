import React from "react";

function Card(props) {
  return (
    <div>
      <h2 className="text-warning">{props.name}</h2>
      <p>{props.title}</p>
      <p>{props.age}</p>
      <h4>{props.bug}</h4>
     <center> <h2>{props.skills}</h2></center>
    </div>
  );
}
export default Card
