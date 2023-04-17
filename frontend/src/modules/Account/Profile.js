import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { UserAuth } from "../../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./Profile.scss";

const Profile = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user?.uid) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setFirstName(docSnap.data().FirstName);
            setLastName(docSnap.data().LastName);
          } else {
            console.log("No such document!");
          }
        }
      } catch (error) {
        console.log("Error getting document:", error);
      }
    };
    fetchUserData();
  }, [user]);

  return (
    <div className="profile">
      <Navbar />
      <Header title="MY ACCOUNT" />
      <div className="myProfile">
        <p>
          Welcome back, {firstName} {lastName}!
        </p>
        <button className="logoutBtn" onClick={handleLogout}>
          LOGOUT
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
