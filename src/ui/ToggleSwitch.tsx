import { useState } from "react";

interface Props {
  onToggle: (value: boolean) => void;
}

export function ToggleSwitch({ onToggle }: Props) {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onToggle(newValue);
  };

  return (
    <div
      onClick={handleToggle}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        width: "60px",
        height: "30px",
        backgroundColor: isOn ? "green" : "gray",
        borderRadius: "15px",
        position: "relative",
        transition: "background-color 0.3s",
      }}
    >
      <div
        style={{
          width: "25px",
          height: "25px",
          backgroundColor: "white",
          borderRadius: "50%",
          position: "absolute",
          top: "2.5px",
          left: isOn ? "32px" : "2.5px",
          transition: "left 0.3s",
        }}
      ></div>
    </div>
  );
}
