import React, { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <h2
        className="mt-5 text-primary border border-3 p-3 border-black rounded-4"
        style={{ color: "#000", textAlign: "center" }}
      >
        Toggle Switch
      </h2>
      <div
        className="toggle-switch"
        style={{ backgroundColor: isOn ? "#4caf50" : "#f44336" }}
        onClick={() => handleToggleSwitch()}
      >
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <span className="switch-state">{isOn ? "on" : "off"}</span>
        </div>
      </div>
    </>
  );
};
