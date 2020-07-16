import React from "react";

function Signup() {
  return (
    <div className="user-signup-area">
      <div className="user-left-thumb">
        <img src="assets/images/others/reg-thumb.jpg" alt="thumb" />
      </div>
      <div className="form-content">
        <h3>Create an Account</h3>
        <form
          id="signup-form"
          className="default-form signup-form"
          method="post"
        >
          <div className="form-group">
            <input
              id="name"
              name="name"
              className="form-controllar"
              type="text"
              placeholder="Username"
            />
          </div>
          {/*/.form-group*/}
          <div className="form-group">
            <input
              id="email-up"
              name="email"
              className="form-controllar"
              type="email"
              placeholder="Email Adderss"
            />
          </div>
          {/*/.form-group*/}
          <div className="form-group">
            <input
              id="pass-up"
              name="password"
              className="form-controllar"
              type="password"
              placeholder="Password"
            />
          </div>
          {/*/.form-group*/}
          <div className="form-group">
            <input
              id="pass-up-confirm"
              name="password"
              className="form-controllar"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          {/*/.form-group*/}
          <div className="login-form-remember">
            <label>
              <input id="remembermesignup" defaultValue type="checkbox" />
              <span>I Agree to the</span> <a href="#">Privacy Polciy</a>
            </label>
          </div>
          <div className="form-btn-group">
            <button type="submit" className="btn btn-default">
              register
            </button>
            <div className="reg-others-midea">
              <div className="text">Or Connect With</div>
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
      </div>
    </div>
  );
}

export default Signup;
