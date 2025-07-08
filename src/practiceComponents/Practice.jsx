import React, { useState } from "react";

const Practice = () => {
  const [bgColor, setBgColor] = useState("#1234ab");

  const handleGenerateColor = () => {
    let code = "#";
    let chars = "1234567890abcdef";

    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      code += chars.charAt(randomIndex);
    }
    setBgColor(code);
  };

  const handleCopyColor = () => {
    navigator.clipboard
      .writeText(bgColor)
      .then(() => {
        alert(`Color Code ${bgColor} is copied`);
      })
      .catch((err) => {
        alert("Error Occur: ", err);
      });
  };
  return (
    <>
      <div className="container" style={{ backgroundColor: bgColor }}>
        <button onClick={handleGenerateColor} aria-label="Generate new color">
          Generate Code
        </button>
        <button onClick={handleCopyColor}>Copy Code</button>
      </div>
      <div>
        <input
          type="text"
          value={bgColor}
          style={{ backgroundColor: bgColor }}
        />
      </div>
    </>
  );
};

export default Practice;
