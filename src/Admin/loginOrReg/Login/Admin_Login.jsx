import swal from "@sweetalert/with-react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../../../layouts/PageTitle/PageTitle";
import "./login.css";
import { DataContext } from "../../../helper/Helper";

const Admin_Login = () => {
  // User State
  const [dataContext, setDataContext] = useContext(DataContext);
  // Redirect
  const navigate = useNavigate();
  // Login User Data
  const [inputData, setInputData] = useState({});
  const handleData = (e) => {
    let target = e.target;
    setInputData({ ...inputData, [target.name]: target.value });
  };
  // Handle Login Auth
  const handleLogin = () => {
    axios
      .get(
        `http://localhost:5000/users?userName=${inputData.userName}&password=${inputData.password}`
      )
      .then((res) => {
        if (res.data.length === 0) {
          swal({
            title: "Credential Mismatch",
            icon: "warning",
          });
        } else {
          swal({
            title: `Hello ${res.data[0].fastName}`,
            text: `You Are Logged in`,
            icon: "success",
          });
          axios
            .get(`http://localhost:5000/users/${res.data[0].id}?_expand=role`)
            .then((res) => {
              if (
                res.data.role.role === "editor" ||
                res.data.role.role === "administrator"
              ) {
                navigate("/admin/dashbord");
              } else {
                navigate(-1);
              }
            });
          setDataContext({
            ...dataContext,
            user: {
              fastName: res.data[0].fastName,
              userId: res.data[0].id,
              lastName: res.data[0].lastName,
              email: res.data[0].email,
              image: res.data[0].image,
              roleId: res.data[0].roleId,
            },
          });
          localStorage.setItem(
            "user-info",
            JSON.stringify({
              fastName: res.data[0].fastName,
              userId: res.data[0].id,
              lastName: res.data[0].lastName,
              email: res.data[0].email,
              image: res.data[0].image,
              roleId: res.data[0].roleId,
            })
          );
        }
      });
  };
  return (
    <>
      {/* Page title start here */}
      <PageTitle title={"Login"} itemTitle={"Login"} />
      {/* Page title end here */}
      {/* Go back to home page Button */}
      <div className="back-to-home text-center">
        <Link to={"/"} className="btn btn-success">
          Go Back To Home
        </Link>
      </div>
      {/* Go back to home page Button */}
      {/* Login Area Start Here */}
      <div className="register-area pt-120 pb-120">
        <div className="container container-small">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="signup-form-wrapper">
                <div className="signup-wrapper">
                  <input
                    name="userName"
                    onChange={(e) => handleData(e)}
                    type="text"
                    placeholder="Email or Username"
                  />
                </div>
                <div className="signup-wrapper">
                  <input
                    name="password"
                    onChange={(e) => handleData(e)}
                    type="text"
                    placeholder="Password"
                  />
                </div>
                <div className="signup-action">
                  <div className="course-sidebar-list">
                    <input
                      className="signup-checkbo"
                      type="checkbox"
                      id="sing-in"
                    />
                    <label className="sign-check" htmlFor="sing-in">
                      <span>Remember me</span>
                    </label>
                  </div>
                </div>
                <div className="sing-buttom mb-20">
                  <button onClick={handleLogin} className="sing-btn">
                    Login
                  </button>
                </div>
                <div className="registered wrapper">
                  <div className="not-register">
                    <span>Not registered?</span>
                    <span>
                      <Link to={"/register"}>Sign up</Link>
                    </span>
                  </div>
                  <div className="forget-password">
                    <div>Forgot password?</div>
                  </div>
                </div>
                <div className="sign-social text-center">
                  <span>Or Sign- in with</span>
                </div>
                <div className="sign-social-icon">
                  <div className="sign-facebook">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9.034"
                      height="18.531"
                      viewBox="0 0 9.034 18.531"
                    >
                      <path
                        id="Path_212"
                        data-name="Path 212"
                        d="M183.106,757.2v-1.622c0-.811.116-1.274,1.39-1.274h1.621v-3.127h-2.664c-3.243,0-4.285,1.506-4.285,4.169v1.969h-2.085v3.127h1.969v9.265h4.054v-9.265h2.664l.347-3.243Z"
                        transform="translate(-177.083 -751.176)"
                        fill="#2467ec"
                      ></path>
                    </svg>
                    <div>Facebook</div>
                  </div>
                  <div className="sign-gmail">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21.692"
                      height="16.273"
                      viewBox="0 0 21.692 16.273"
                    >
                      <g id="gmail" transform="translate(0 -63.953)">
                        <path
                          id="Path_8685"
                          data-name="Path 8685"
                          d="M1.479,169.418H4.93v-8.381l-2.26-3.946L0,157.339v10.6a1.479,1.479,0,0,0,1.479,1.479Z"
                          transform="translate(0 -89.192)"
                          fill="#0085f7"
                        ></path>
                        <path
                          id="Path_8686"
                          data-name="Path 8686"
                          d="M395.636,169.418h3.451a1.479,1.479,0,0,0,1.479-1.479v-10.6l-2.666-.248-2.264,3.946v8.381Z"
                          transform="translate(-378.874 -89.192)"
                          fill="#00a94b"
                        ></path>
                        <path
                          id="Path_8687"
                          data-name="Path 8687"
                          d="M349.816,65.436,347.789,69.3l2.027,2.541,4.93-3.7V66.176A2.219,2.219,0,0,0,351.2,64.4Z"
                          transform="translate(-333.054)"
                          fill="#ffbc00"
                        ></path>
                        <path
                          id="Path_8688"
                          data-name="Path 8688"
                          d="M72.7,105.365l-1.932-4.08L72.7,98.956l5.916,4.437,5.916-4.437v6.409L78.619,109.8Z"
                          transform="translate(-67.773 -33.52)"
                          fill="#ff4131"
                          fillRule="evenodd"
                        ></path>
                        <path
                          id="Path_8689"
                          data-name="Path 8689"
                          d="M0,66.176v1.972l4.93,3.7V65.436L3.55,64.4A2.219,2.219,0,0,0,0,66.176Z"
                          transform="translate(0)"
                          fill="#e51c19"
                        ></path>
                      </g>
                    </svg>
                    <div>Google</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Login Area End Here */}
    </>
  );
};

export default Admin_Login;
