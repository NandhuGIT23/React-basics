import React, { useState } from "react";

const Kums = () => {
  const handleClick = () => {
    setValue(value + 1);
  };

  const handleClick2 = () => {
    setValue(value - 1);
  };

  const handleClick3 = () => {
    setValue(0);
  };
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>{value}</h1>
      <div className="container">
        <button onClick={handleClick}>click me to increase </button>
      </div>
      <div className="container2">
      <button onClick={handleClick2}>click me to decrease</button>
      </div>
      <div className="container3">
      <button onClick={handleClick3}>click me to 0</button>
      </div>
    </div>
  );
};

export default Kums;
