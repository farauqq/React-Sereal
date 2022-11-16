import React from "react";
import "../../assets/css/style.css";
import { Link } from "react-router-dom";
import google from "../../assets/img/google.png";
import LoginCat from "../../assets/img/login_cat.png";

function Login() {
  return (
    <>
      <section className="login d-flex">
        <div className="login-left w-100 h-100 d-none d-md-block">
          <div className="col-11">
            <img className="w-100" src={LoginCat} alt="" />
          </div>
        </div>
        <div className="login-right d-flex w-100 h-100">
          <div className="col-12">
            <div className="login-header text-center">
              <h1>Selamat Datang</h1>
              <p id="error">Email atau Password salah!</p>
            </div>
            <form action="JavaScript:void(0)" onsubmit="login();" className="login-form">
              <label for="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="e-mail" placeholder="name@example.com" />
              <label for="pass" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" placeholder="*******" />
              <input type="submit" value="Masuk" className="signin" />

              <p className="text-center">atau</p>
              <button className="signin-google">
                <img src={google} alt="sereal-google-login" height="30px" />
                Continue with google
              </button>
              <p className="text-center">
                Belum mempunyai akun?
                <Link to="/register">
                  <span>Daftar</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
