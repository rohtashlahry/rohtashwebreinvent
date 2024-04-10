import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import "./dashboard.css";
import ApiService from "../Services/ApiService";

const Dashboard = () => {
  ProtectedRoute();
  const location = useLocation();
  const [users, setUsers] = useState([]);

  const handleFetchUsers = async () => {
    try {
      const res = await ApiService.get("users");
      console.log(res.data);
      if (res) {
        setUsers(res.data);
      }
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div className="dashboard-container">
      <h2>WebReinvent users dashboard</h2>
      <button onClick={handleFetchUsers} className="fetchbtn">Fetch users</button>
      <div>
        <div className="user-list">
          <ul>
            {users &&
              users.map((x: any, index: any) => (
                <li key={index} className="user-item">
                  <div className="user-image">
                    <img src={x.avatar} alt="User" />
                  </div>
                  <div className="user-details">
                    <strong>
                      {x.firstName} {x.lastName}
                    </strong>
                    <p>{x.email}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
