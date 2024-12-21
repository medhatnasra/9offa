import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/MyContext";
import "react-toastify/dist/ReactToastify.css";

export const Header = () => {
  const { isUserAuth, user } = useContext(MyContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          9offa
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {isUserAuth && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
              </>
            )}
            {isUserAuth &&
              (user?.role === "admin" || user?.role === "vendor") && (
                <li className="nav-item">
                  <Link className="nav-link" to="/add-product">
                    Add Product
                  </Link>
                </li>
              )}
            {isUserAuth && user?.role === "admin" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/users-list">
                    Users List
                  </Link>
                </li>
              </>
            )}
            {!isUserAuth && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}

            {isUserAuth && (
              <li className="nav-item">
                <Link className="nav-link" to={`/profile/${user?.id}`}>
                  {user?.firstname}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
