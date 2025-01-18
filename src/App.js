import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Do you love me?</h1>
      <div className="buttons">
        <button onClick={() => navigate("/are-you-sure")}>Yes</button>
        <button onClick={() => navigate("/rejection")}>No</button>
      </div>
    </div>
  );
}

export default App;