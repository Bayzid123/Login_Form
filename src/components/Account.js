import { React, useEffect } from "react";
import { Link } from "react-router-dom";


const Account = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })


  var LoginForm;
  var RegForm;
  var Indicator;
  useEffect(() => {
    LoginForm = document.getElementById("LoginForm");
    RegForm = document.getElementById("RegForm");
    Indicator = document.getElementById("Indicator");
  })

  function login() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
  }

  function register() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
  }

  return (
    <div>
      <div>
        {/*--- account page ---*/}
        <div className="account-page">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <img src="./images/image1.png" alt="" width="100%" />
              </div>
              <div className="col-2">
                <div className="form-container">
                  <div className="form-btn">
                    <span className="register" onClick={register}>
                      Register
                    </span>
                    <span className="login" onClick={login}>
                      Login
                    </span>

                    <hr id="Indicator" />
                  </div>
                  <form id="LoginForm">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="password" />
                    <button type="submit" className="btn">
                      Login
                    </button>
                    <Link to="">Forgot Password</Link>
                  </form>
                  <form id="RegForm">
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="password" />
                    <button type="submit" className="btn">
                      Register
                    </button>
                  </form>
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
