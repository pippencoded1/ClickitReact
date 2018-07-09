import React from "react";
import "./friendcard.css";

const FriendCard = props => {
  console.log("returned", props)
  return (
  <div className="card">
    <div className="img-container">
      <img onClick={() => props.selectFriend()} alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Zodiac Sign:</strong> {props.zodiac}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeFriend(props.id)} className="remove">
     DELETE ME
    </span>
  </div>
 )
};

export default FriendCard;