import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./AppRoutes";
import BackToTop from "./components/BackToTop";

import "./App.scss";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Router>
        <Navbar show={show} setShow={setShow} />
        <AppRoutes />
        <BackToTop />
      </Router>
    </>
  );
}

export default App;
