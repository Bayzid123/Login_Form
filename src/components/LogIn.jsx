import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Register from "./Register";

const Account = () => {
  const [page, setPage] = useState("login");
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const formik = useFormik({});

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
                      className={page === "register" ? "register" : "register inactive"}
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
                    <hr className={page === "register" ? "indicatorRegister" : "indicatorLogin"} />
                  </div>
                  {page === "login" ? (
                    <form id="LoginForm">
                      <input
                        onClick={(e) => {
                          console.log(e.target.value);
                        }}
                        type="email"
                        placeholder="Email"
                      />
                      <input type="password" placeholder="password" />
                      <button type="submit" className="btn">
                        Login
                      </button>
                      <Link to="">Forgot Password</Link>
                    </form>
                  ) : (
                    <div id="RegForm">
                      <Register />
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
