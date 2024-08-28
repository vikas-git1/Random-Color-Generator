import React, { useState, useRef } from "react";
import "./GenColor.css";
const GenColor = () => {
  const [color, setColor] = useState("black");
  const [colorCode, setColorCode] = useState("");
  const colorCodeRef = useRef(null);
  let chars = "1234567890ABCDEF";

  const handleGenerateColor = () => {
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      randomColor += chars.charAt(randomIndex);
    }

    setColor(randomColor);
    setColorCode(randomColor);
  };

  const handleCopyPass = () => {
    colorCodeRef.current.select();

    navigator.clipboard
      .writeText(colorCode)
      .then(() => alert(`Color Code: ${colorCode} copied`));
  };
  return (
    <>
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
        value={colorCode}
        ref={colorCodeRef}
        style={{ backgroundColor: color }}
        readOnly
      />
    </>
  );
};

export default GenColor;
