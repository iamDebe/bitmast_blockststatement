import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const SignupForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    password: ""
  })

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
      <div className="wrapper ">
        <div className="row custom__row--1">
          <div className="reg__hero col-md-4 d-none d-sm-block"></div>
          <div className="col-md-4 offset-md-1 col-sm4- px-5 px-sm-1 custom__form">
            <form action="">
              <img
                src="assets/images/logo.svg"
                alt=""
                className="logo mb-3 w-75 "
              />
              <h6 className=" mb-3 heading__text">
                {" "}
                You need an account to save transactions. Sign Up here!{" "}
              </h6>
              <div className="input-group mb-3 ">
                <input
                  type="text"
                  className="  custom__form--ctrl"
                  defaultValue={formData.firstName}
                  name="firstName"
                  onChange={handleChange}
                  placeholder="First name"
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="  custom__form--ctrl"
                  defaultValue={formData.lastName}
                  name="lastName"
                  onChange={handleChange}
                  placeholder="Last name"
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="  custom__form--ctrl"
                  defaultValue={formData.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type={passwordType}
                  className="  custom__form--ctrl"
                  defaultValue={formData.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
                <span className="inpu">
                  <i
                    className={`fa ${eyeIcon} ms-4`}
                    onClick={togglePasswordVisibilty}
                  ></i>
                </span>
              </div>
              <button className="custom__btn mt-3">Sign up</button>
            </form>
            <p className="tc my-3">
              By clicking the SIGN UP button, you agree to abide by
              Blockstatement’s{" "}
              <Link to="" className="a__link">
                Terms & Conditions
              </Link>{" "}
            </p>
            <p className="tc">
              I already have an account with Blockstatement.{" "}
              <Link to="/login" className="a__link">
                Sign in
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupForm;
