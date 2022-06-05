import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import React, { useState, useRef } from "react";
import WeatherApp from "./pages/WeatherApp";

import Layout from "./components/Layout";
import Calculator from "./pages/Calculator";
import DigitalClock from "./pages/DigitalClock";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/:search" element={<WeatherApp />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/digitalClock" element={<DigitalClock />} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;
