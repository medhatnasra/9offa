import React from "react";
import { Link } from "react-router-dom";

export const LoginForm = ({ handlechange, formData, handlesubmit }) => {
  return (
    <form className="mt-5">
      <div className="container-sm">
        <h2 className="center-text">Login</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={handlechange}
            value={formData.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handlechange}
            value={formData.password}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Stay Connected .{" "}
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handlesubmit}
        >
          Login
        </button>
      </div>
      <div className="mt-3 text-center">
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="text-primary">
            Register
          </Link>
        </p>
      </div>
    </form>
  );
};
