import React, { useState, useRef } from "react";
import "./GenColor.css";
const GenColor = () => {
  const [color, setColor] = useState("white");
  const colorCodeRef = useRef(null);
  let chars = "1234567890ABCDEF";

  const handleGenerateColor = () => {
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      randomColor += chars.charAt(randomIndex);
    }

    setColor(randomColor);
  };

  const handleCopyPass = () => {
    colorCodeRef.current.select();

    navigator.clipboard
      .writeText(color)
      .then(() => alert(`Color Code: ${color} copied`));
  };
  return (
    <>
      <h1 style={{ color: color }}>Random Color Generator</h1>
      <div className="container" style={{ backgroundColor: color }}>
        <button className="btn genColor" onClick={handleGenerateColor}>
          Generate Color
        </button>
        <button className="btn copyColor" onClick={handleCopyPass}>
          Copy Color
        </button>
      </div>
      {/* <div className="colorCode">{colorCode}</div> */}
      <input
        type="text"
        className="colorCode"
        value={color}
        ref={colorCodeRef}
        style={{ backgroundColor: color }}
        readOnly
      />
    </>
  );
};

export default GenColor;
