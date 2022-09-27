import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appbar from "./components/Appbar";
import Student from "./components/Student";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Appbar />
      </React.Fragment>
      <Routes>
        <Route exact path="/home" element={<Student />} />
        <Route exact path="/" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
