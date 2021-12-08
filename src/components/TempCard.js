import React from "react";

const TempCard = (props) => {
  return (
    <div className="tile is-parent">
      <div className="tile is-child box">
        <p className="title">{props.day}</p>
        <figure className="image is-32x32">
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt="icon indicating weather type"
          ></img>
        </figure>
        <p>
          {props.tempMax} {props.tempMin}
        </p>
      </div>
    </div>
  );
};

export default TempCard;
