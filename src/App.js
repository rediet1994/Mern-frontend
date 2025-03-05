import React from "react";
import Form from "./components/SageTrainingApplicationForm";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "35rem", borderRadius: "15px" }}>
        <div className="card-body text-center">
          <h2 className="card-title text-primary mb-4">Register Now</h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
