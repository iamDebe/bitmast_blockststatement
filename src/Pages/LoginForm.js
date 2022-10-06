import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
    console.log(formData)
  };
  const [passwordType, setPasswordType] = useState("password");

  const [eyeIcon, setEyeIcon] = useState("fa-eye-slash");

  const togglePasswordVisibilty = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setEyeIcon("fa-eye");
      return;
    }
    setPasswordType("password");
    setEyeIcon("fa-eye-slash");
  };
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="row custom__row--1">
          <div className="reg__hero col-md-4 d-none d-sm-block"></div>
          <div className="col-md-4 offset-md-1 col-sm4- px-5 px-sm-1 custom__form">
            <form action="">
              <img
                src="assets/images/logo.svg"
                alt=""
                className="logo mb-3 w-75"
              />
              <h6 className=" mb-3 heading__text">
                {" "}
                Sign in to access your dashboard and transaction history{" "}
              </h6>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="  custom__form--ctrl"
                  name="email"
                  defaultValue={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type={passwordType}
                  className="  custom__form--ctrl"
                  name="password"
                  defaultValue={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <span className="inpu">
                  <i
                    className={`fa ${eyeIcon} ms-4` }
                    onClick={togglePasswordVisibilty}
                  ></i>
                </span>
              </div>

              <button className="custom__btn mt-3">Sign in</button>
            </form>
            <p className="tc mt-3">
              I do not have an account with Blockstatement.{" "}
              <Link to="/register" className="a__link">
                Sign up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;
