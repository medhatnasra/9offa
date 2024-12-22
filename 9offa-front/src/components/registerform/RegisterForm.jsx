import React from "react";

export const RegisterForm = ({ handlechange, FormData, handlesubmit }) => {
  return (
    <form className="mt-5">
      <div className="container-sm">
        <h2 className="center-text">Register</h2>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            Firstname
          </label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            onChange={handlechange}
            value={FormData.firstname}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Lastname" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            onChange={handlechange}
            value={FormData.lastname}
          />
        </div>

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
            value={FormData.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="Lastname" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            placeholder="+1 123-456-7890"
            name="phone"
            onChange={handlechange}
            value={FormData.phone}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={handlechange}
            value={FormData.password}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            name="isVendor"
            onChange={handlechange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Vendor
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handlesubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
