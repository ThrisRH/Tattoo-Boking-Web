import React, { useEffect, useState } from "react";
import Home from "./components/pages/Home/home";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: "#1c1c1c" }}>
        <Home />
      </div>
    </Router>
  );
};

export default App;
