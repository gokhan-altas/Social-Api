import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from "./components/User";
import Post from "./components/Post";
import UserDetails from "./components/UserDetails";
import Header from "./components/Header/Header";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div className=" mx-auto  bg-white">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Post />} />
            <Route path="users" element={<User />} />
            <Route path="userdetails/:userId" element={<UserDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
