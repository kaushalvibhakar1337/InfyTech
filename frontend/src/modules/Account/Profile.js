import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { UserAuth } from "../../context/AuthContext";
import useFetchUser from "../../hooks/useFetchUser";
import "./Profile.scss";

const Profile = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const userData = useFetchUser(user?.uid);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  useEffect(() => {
    if (userData) {
      setFname(userData.FirstName);
      setLname(userData.LastName);
    }
  }, [userData]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="profile">
      <Navbar />
      <Header title="MY ACCOUNT" />
      <div className="myProfile">
        <div className="container">
          <div className="left">
            <p className="heading">PROFILE INFORMATION</p>
            <p className="content">
              <input
                className="inputField"
                type="text"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <input
                className="inputField"
                type="text"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              <input className="inputField" type="email" placeholder="Email" />
              <input
                className="inputField"
                type="password"
                placeholder="Password"
              />
            </p>
          </div>
          <div className="right">
            <p className="heading">PRIMARY ADDRESS</p>
          </div>
        </div>
        <button className="logoutBtn" onClick={handleLogout}>
          LOGOUT
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
