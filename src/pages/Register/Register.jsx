import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import RegisterCat from "../../assets/img/register_cat.png";
import google from "../../assets/img/google.png";
import React from "react";

function Register() {
  return (
    <>
      {/* <!-- REGISTER FORM --> */}
      <section className="login d-flex">
        <div className="login-left w-100 h-100 d-none d-md-block">
          <div className="col-10">
            <img src={RegisterCat} alt="" />
          </div>
        </div>
        <div className="login-right d-flex w-100 h-100 m-auto">
          <div className="col-12">
            <div className="login-header text-center">
              <h1>Buat Akun Sereal</h1>
            </div>
            <form action="JavaScript:void(0)" onsubmit="signUp();" className="login-form">
              <label for="fullname" className="form-label">
                Full Name
              </label>
              <input type="text" className="form-control" id="fullname" placeholder="John Doe" />
              <label for="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
              <label for="pass" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="pass" placeholder="*******" />
              <label for="confirm-pass" className="form-label">
                Confirm Password
              </label>
              <input type="password" className="form-control" id="confirm-pass" placeholder="*******" />
              <p>
                Dengan mendaftar, kamu setuju dengan
                <a href="">
                  <span>Terms of Service</span>
                </a>{" "}
                dan
                <a href="#">
                  <span>Privacy Policy</span>
                </a>
              </p>
              <input type="submit" value="Daftar" className="signin" />
              <p className="text-center">
                Already have an account?
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </p>
              <p className="text-center">atau</p>
              <button className="signin-google">
                <img src={google} alt="sereal-google-login" height="30px" />
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
