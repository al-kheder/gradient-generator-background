import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";
import { FaRegCopy } from "react-icons/fa6";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "../App.css";

const Gradient = () => {
  const [color1, setColor1] = useState(randomcolor());
  const [color2, setColor2] = useState(randomcolor());
  const [direction, setDirection] = useState("to right");
  const [cssCode, setCssCode] = useState("");
  const handleSelectChange = (event) => {
    setDirection(event.target.value);
  };
  useEffect(() => {
    const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
    document.body.style.background = gradient;
    setCssCode(`background:${gradient};`);
  }, [color1, color2, direction]);

  const handleColorChange = (e, setColor) => {
    setColor(e.target.value);
  };
  const handleRandomClick = () => {
    setColor1(randomcolor());
    setColor2(randomcolor());
  };
  const handleCopy = () => {alert("CSS code copied to clipboard!");};
  return (
    <div>
      <h1>Create your own gradient:</h1>
      <div className="colorpicker">
        <input
          type="color"
          name="color1"
          value={color1}
          onChange={(e) => handleColorChange(e, setColor1)}
        />
        <input
          type="color"
          name="color2"
          value={color2}
          onChange={(e) => handleColorChange(e, setColor2)}
        />
        <div>
          <button className="btn-random" onClick={handleRandomClick}>
            Generate Random gradient!
          </button>
          <select id="dropdown" value={direction} onChange={handleSelectChange}>
            <option value="to right">to right</option>
            <option value="to left">to left</option>
            <option value="to top">to top</option>
            <option value="to bottom">to bottom</option>
            <option value="to top left">to top left</option>
            <option value="to top right">to top right</option>
            <option value="to bottom left">to bottom left</option>
            <option value="to bottom right">to bottom right</option>
            <option value="45deg">45deg</option>
            <option value="90deg">90deg</option>
            <option value="120deg">120deg</option>
            <option value="180deg">180deg</option>
          </select>
        </div>
      </div>
      <div className="cssCode">
        <code>{cssCode}</code>
        <CopyToClipboard text={cssCode} onCopy={handleCopy}>
          <FaRegCopy className="copybutton" />
        </CopyToClipboard>
      </div>

    </div>
  );
};

export default Gradient;
