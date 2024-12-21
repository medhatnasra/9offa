import React, { useContext, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyContext } from "../../context/MyContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const { setAuthToken, setUser, SetisUserAuth } = useContext(MyContext);

  const email = useRef("");
  const password = useRef("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email.current === "") return toast.error("Email is required !");
    if (password.current === "") return toast.error("Password is required !");
    try {
      const result = await axios.post(
        "http://localhost:4000/api/login/",
        {
          email: email.current,
          password: password.current,
        },
        { withCredentials: true }
      );

      console.log(result);

      if (result.status === 200) {
        setAuthToken(result.data.token);
        setUser(result.data.userdetails);
        SetisUserAuth(true);
        navigate("/shop", { replace: true });
      }
    } catch (err) {
      const finalerror = err.response.data.message.replace(/"/g, "");
      return toast.error(finalerror);
    }
  };

  return (
    <form className="mt-5">
      <div className="container-sm">
        <h2 className="center-text">Login</h2>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              email.current = e.target.value;
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              password.current = e.target.value;
            }}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Login
        </button>
      </div>
    </form>
  );
};
