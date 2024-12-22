import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "../../context/MyContext";

export const UsersList = ({ users, refetch }) => {
  const { isUserAuth, user } = useContext(MyContext);

  const { id } = user;

  const handleDelete = async (id) => {
    try {
      const result = await axios.delete(
        `http://localhost:4000/api/user/${id}`,
        {
          withCredentials: true,
        }
      );
      if (result.status === 200) {
        refetch();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Users Table</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user._id}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
              <td>{new Date(user.date).toLocaleDateString()}</td>
              {id !== user._id && (
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user._id)}
                  >
                    <i className="bi bi-trash"></i> {/* Bootstrap trash icon */}
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
