import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchUser from "../../hooks/useFetchUser";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { UserAuth } from "../../context/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Profile.scss";

const Profile = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const userData = useFetchUser(user?.uid);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    if (userData) {
      setFname(userData.FirstName);
      setLname(userData.LastName);
      setPhone(userData.PhoneNumber);
      setAddress1(userData.AddressLine1);
      setAddress2(userData.AddressLine2);
      setCity(userData.City);
      setPincode(userData.Pincode);
      setState(userData.State);
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

  const handleInfoUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "users", user.uid), {
        FirstName: fname,
        LastName: lname,
        PhoneNumber: phone,
        Email: user.email,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleAddressUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "users", user.uid), {
        AddressLine1: address1,
        AddressLine2: address2,
        City: city,
        Pincode: pincode,
        State: state,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const notify = () =>
    toast.success("PROFILE UPDATED!", {
      className: "toastify",
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <div className="profile">
      <Navbar />
      <Header title="MY ACCOUNT" />
      <div className="myProfile">
        <div className="container">
          <div className="left">
            <p className="heading">PERSONAL INFO</p>
            <p className="content">
              <form onSubmit={handleInfoUpdate}>
                <input
                  className="inputField"
                  type="text"
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
                <input
                  className="inputField"
                  type="text"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  required
                />
                <input
                  className="inputField"
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  disabled
                  style={{ cursor: "not-allowed" }}
                />
                <input
                  className="inputField"
                  type="number"
                  placeholder="Phone Number"
                  value={phone}
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 10);
                  }}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <button type="submit" className="updateBtn" onClick={notify}>
                  SAVE UPDATES
                </button>
              </form>
            </p>
            <br />
            <button className="logoutBtn" onClick={handleLogout}>
              LOGOUT
            </button>
          </div>
          <div className="right">
            <p className="heading">PRIMARY ADDRESS</p>
            <form onSubmit={handleAddressUpdate}>
              <input
                className="inputField"
                type="text"
                placeholder="Address Line 1"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                required
              />
              <input
                className="inputField"
                type="text"
                placeholder="Address Line 2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                required
              />
              <input
                className="inputField"
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <input
                className="inputField"
                type="number"
                placeholder="Pincode"
                value={pincode}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 6);
                }}
                onChange={(e) => setPincode(e.target.value)}
                required
              />
              <input
                className="inputField"
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
              <button type="submit" className="updateBtn" onClick={notify}>
                SAVE UPDATES
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
