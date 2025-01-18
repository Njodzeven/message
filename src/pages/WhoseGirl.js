import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function WhoseGirl() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

const handleInputChange = (e) => {
    setName(e.target.value);
    if (e.target.value.toLowerCase() === "njodzeven" || e.target.value.toLowerCase() === "buhnyuy" || e.target.value.toLowerCase() === "njodzeven buhnyuy") {
        setTimeout(() => navigate("/love-you"), 1000); // Delay for fun!
    }
};

  return (
    <div className="container">
      <h1>Whose girl are you?</h1>
      <input
        type="text"
        placeholder="Enter the name"
        value={name}
        onChange={handleInputChange}
        className="textbox"
      />
    </div>
  );
}

export default WhoseGirl;
