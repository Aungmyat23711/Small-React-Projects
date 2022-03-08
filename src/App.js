import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import React, { useState, useRef } from "react";
import Home from "./pages/Home";

import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/:search" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;
