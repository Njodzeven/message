import React from "react";
import { useNavigate } from "react-router-dom";

function AreYouSure() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Are you sure?</h1>
      <div className="buttons">
        <button onClick={() => navigate("/whose-girl")}>Yes</button>
        <button onClick={() => navigate("/rejection")}>No</button>
      </div>
    </div>
  );
}

export default AreYouSure;
