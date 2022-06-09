import React from "react";

import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { User } from "./views/User";
import "./App.css";

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:user" element={<User />} />
    </Routes>
  </div>
);

export default App;
