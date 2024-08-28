import React, { useState } from "react";
import "./GenColor.css";
const GenColor = () => {
  //   const [color, setColor] = useState("black");
  return (
    <>
      {" "}
      <div className="container" style={{ backgroundColor: color }}>
        <button className="btn genColor">Generate Color</button>
        <button className="btn copyColor">Copy Color</button>
      </div>
      <input type="text" className="colorCode" />
    </>
  );
};

export default GenColor;
