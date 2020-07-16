import React from "react";

function Signin() {
  return (
    <div className="user-signin-area">
      <div className="user-left-thumb">
        <img src="assets/images/others/login-thumb.jpg" alt="thumb" />
      </div>
      <div className="form-content">
        <h3>Login to Account</h3>
        <form className="default-form signin-form">
          <div className="form-group">
            <input
              id="email"
              name="email"
              className="form-controllar"
              type="email"
              placeholder="Email Adderss"
            />
          </div>
          {/*/.form-group*/}
          <div className="form-group">
            <input
              id="pass"
              name="password"
              className="form-controllar"
              type="password"
              placeholder="Password"
            />
          </div>
          {/*/.form-group*/}
          <div className="remember-and-password">
            <div className="login-form-remember">
              <label>
                <input id="remembermesignin" defaultValue type="checkbox" />
                <span>Remember Me</span>
              </label>
            </div>
            <div className="forget-pass">
              <a className="btn-password" href="#">
                Forget Password
              </a>
            </div>
          </div>
          {/*/.remember-and-password*/}
          <div className="form-btn-group">
            <button type="submit" className="btn btn-default">
              sign in
            </button>
            <div className="reg-others-midea">
              <div className="text">Or Login With</div>
              <div className="midea-icons">
                <ul className="social-share">
                  <li>
                    <a className="facebook" href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="google-plus" href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </form>
        <div className="login-form-register-now">
          Dont have an account?{" "}
          <a className="btn-register-now" href="#">
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signin;
