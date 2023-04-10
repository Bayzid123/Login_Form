import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvoiceCreate from "./InvoiceCreate";
import LogIn from "./LogIn";
import InvoiceLandingPage from "./InvoiceLanding";

const Routing = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LogIn />} />
        <Route path="/Dashboard" element={<Dashboard />} /> */}
        <Route path="/" element={<InvoiceCreate />} />
        <Route path="/InvoiceLanding" element={<InvoiceLandingPage />} />
      </Routes>
    </Router>
  );
};

export default Routing;
