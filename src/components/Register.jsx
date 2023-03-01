import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Register = ({setPage}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://10.209.100.207:5001/ApiForMyProjects/User/CreateUser`,
        {
          strUserName: username,
          strEmail: email,
          strPassword: password,
        }
      );
      toast.success(response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
      });
      setPage("login")
    } catch (e) {
      toast.warn(e.response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
      });
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <form id="RegForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
