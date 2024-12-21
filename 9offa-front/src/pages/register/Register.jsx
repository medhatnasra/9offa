import React, { useRef, useState } from "react";
import "./Register.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const firstname = useRef("");
  const lastname = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const password = useRef("");
  const isVendor = useRef("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (firstname.current === "")
        return toast.error("Firstname is required !");
      if (lastname.current === "") return toast.error("Lastname is required !");
      if (email.current === "") return toast.error("email is required !");
      if (phone.current === "") return toast.error("Phone is required !");
      if (password.current === "") return toast.error("Password is required !");

      const result = await axios.post("http://localhost:4000/api/register/", {
        firstname: firstname.current,
        lastname: lastname.current,
        email: email.current,
        phone: phone.current,
        password: password.current,
        role: isVendor.current === "" ? "client" : isVendor.current,
      });

      if (result.status === 201) {
        navigate("/login", { replace: true });
        toast.success("Registred Successfully ..");
      }
    } catch (err) {
      const finalerror = err.response.data.message.replace(/"/g, "");
      return toast.error(finalerror);
    }
  };

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
            onChange={(e) => (firstname.current = e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Lastname" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => (lastname.current = e.target.value)}
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
            onChange={(e) => (email.current = e.target.value)}
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
            onChange={(e) => (phone.current = e.target.value)}
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
            onChange={(e) => (password.current = e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            value="vendor"
            onChange={(e) => (isVendor.current = e.target.value)}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Vendor
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};
