import React from "react";

import { Link } from "react-router-dom";

export const ErrorUI = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <div className="text-danger">
          <i className="bi bi-exclamation-circle display-1"></i>
        </div>
        <h1 className="text-danger mt-3">Oops! Something went wrong</h1>
        <p className="text-muted">
          We encountered an error. Please try again later.
        </p>
        <Link to="/" className="btn btn-primary mt-3">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};
