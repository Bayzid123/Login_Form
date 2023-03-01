import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Register from "./Register";
import { toast } from "react-toastify";
import axios from "axios";

const Account = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://10.209.100.207:5001/ApiForMyProjects/User/UserLogin`,
        {
          strEmail: email,
          strPassword: password,
        }
      );
      toast.success(response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
      });
      navigate("/Dashboard")
    } catch (error) {
      toast.warn(error.response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
      });
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [page, setPage] = useState("login");
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div>
        <div className="account-page">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <div className="form-container">
                  <div className="form-btn">
                    <span
                      className={
                        page === "register" ? "register" : "register inactive"
                      }
                      onClick={(e) => {
                        setPage("register");
                      }}
                    >
                      Register
                    </span>
                    <span
                      className={page === "login" ? "login" : "login inactive"}
                      onClick={(e) => {
                        setPage("login");
                      }}
                    >
                      Login
                    </span>
                    <hr
                      className={
                        page === "register"
                          ? "indicatorRegister"
                          : "indicatorLogin"
                      }
                    />
                  </div>
                  {page === "login" ? (
                    <form id="LoginForm" onSubmit={handleSubmit}>
                      <input
                        onClick={(e) => {
                          console.log(e.target.value);
                        }}
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
                        Login
                      </button>
                      <Link to="">Forgot Password</Link>
                    </form>
                  ) : (
                    <div id="RegForm">
                      <Register setPage={setPage} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
