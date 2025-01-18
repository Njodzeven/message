import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AreYouSure from "./pages/AreYouSure";
import WhoseGirl from "./pages/WhoseGirl";
import LoveYou from "./pages/LoveYou";
import Rejection from "./pages/Rejection";
import "./index.css";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/are-you-sure" element={<AreYouSure />} />
      <Route path="/whose-girl" element={<WhoseGirl />} />
      <Route path="/love-you" element={<LoveYou />} />
      <Route path="/rejection" element={<Rejection />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
