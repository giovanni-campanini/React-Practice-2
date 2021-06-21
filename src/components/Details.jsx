import React from "react";

const Details = (props) => {
  return (
    <div>
      <p className="info">{props.phone}</p>
      <p className="info">{props.mail}</p>
    </div>
  );
};

export default Details;
