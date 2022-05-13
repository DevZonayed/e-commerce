import swal from "@sweetalert/with-react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../../../layouts/PageTitle/PageTitle";
import { DataContext } from "../../../helper/Helper";

const AdminRegister = () => {
  // User State Menagement
  const [dataContext, setDataContext] = useContext(DataContext);
  // Redirect script
  const navigate = useNavigate();
  // Password Toggle
  const [passShow, setPassShow] = useState(false);
  /**
   * User Menagement Start Here
   */
  const [userData, setUserData] = useState({
    fastName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    image: "",
    timeThumb: new Date().getTime(),
    login: true,
    terms: false,
    roleId: 2,
  });

  // Handle tarm and condition
  const handletarm = (e) => {
    let target = e.target;
    if (target.checked) {
      setUserData({ ...userData, terms: true });
    } else {
      setUserData({ ...userData, terms: false });
    }
  };
  // All Dta Handler
  const handleRegData = (e) => {
    let target = e.target;
    setUserData({ ...userData, [target.name]: target.value });
  };
  /**
   * Send Data To Database
   */
  const handleSendData = (e) => {
    e.preventDefault();
    if (
      Object.values(userData).includes("") ||
      Object.values(userData).includes(false)
    ) {
      if (Object.values(userData).includes(false)) {
        swal({
          title: "Please Accept Our Terms and Condition",
        });
      } else {
        swal({
          title: "All Fields Are Requreds",
        });
      }
    } else {
      axios
        .post(`http://localhost:5000/users`, userData)
        .then((res) => {
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
              fastName: res.data.fastName,
              userId: res.data.id,
              lastName: res.data.lastName,
              email: res.data.email,
              image: res.data.image,
              roleId: res.data.roleId,
            })
          );
          navigate("/");
          swal({
            title: `Congratulations ${res.data.fastName}`,
            text: "You are now a member of this website",
          });
        })
        .then(() => {
          setUserData({
            fastName: "",
            lastName: "",
            email: "",
            userName: "",
            password: "",
            image: "",
            timeThumb: new Date().getTime(),
            login: true,
            terms: false,
            roleId: 2,
          });
        });
    }
  };

  return (
    <>
      {/* Page title start here */}
      <PageTitle title={"Register"} itemTitle={"Register"} />
      {/* Page title end here */}
      {/* Go back to home page Button */}
      <div className="back-to-home text-center">
        <Link to={"/"} className="btn btn-success">
          Go Back To Home
        </Link>
      </div>
      {/* Go back to home page Button */}
      {/* Reg section start here */}
      <section className="register-area">
        <div className="register-area pt-120 pb-120">
          <div className="container container-small">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="signup-form-wrapper">
                  <form onSubmit={(e) => handleSendData(e)}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="signup-wrapper">
                          <input
                            name="fastName"
                            value={userData.fastName}
                            onChange={(e) => handleRegData(e)}
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="signup-wrapper">
                          <input
                            name="lastName"
                            value={userData.lastName}
                            onChange={(e) => handleRegData(e)}
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="signup-wrapper">
                          <input
                            name="email"
                            value={userData.email}
                            onChange={(e) => handleRegData(e)}
                            type="text"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="signup-wrapper">
                          <input
                            pattern="[a-z0-9]+"
                            minLength="4"
                            maxLength="10"
                            name="userName"
                            value={userData.userName}
                            onChange={(e) => handleRegData(e)}
                            type="text"
                            placeholder="Username"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="signup-wrapper">
                          <InputGroup>
                            <Form.Control
                              name="password"
                              value={userData.password}
                              onChange={(e) => handleRegData(e)}
                              type={passShow ? "text" : "password"}
                              placeholder="Password"
                            />
                            <InputGroup.Text style={{ marginBottom: "20px" }}>
                              <span
                                onClick={() => setPassShow(!passShow)}
                                style={{ cursor: "pointer" }}
                              >
                                {passShow ? "Hide" : "Show"}
                              </span>
                            </InputGroup.Text>
                          </InputGroup>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="signup-wrapper">
                          <input
                            name="image"
                            value={userData.image}
                            onChange={(e) => handleRegData(e)}
                            type="text"
                            placeholder="Profile Image Url"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="signup-action">
                      <div className="course-sidebar-list">
                        <input
                          onChange={(e) => handletarm(e)}
                          className="signup-checkbo"
                          type="checkbox"
                          id="sing-up"
                        />
                        <label className="sign-check" htmlFor="sing-up">
                          <span>
                            Accept the terms and{" "}
                            <Link to={""}>Privacy Policy</Link>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="sing-buttom mb-20">
                      <button type="Submit" className="sing-btn">
                        Register now
                      </button>
                    </div>
                  </form>

                  <div className="acount-login text-center">
                    <span>
                      Already have an account? <Link to={"/login"}>Log in</Link>
                    </span>
                  </div>
                  <div className="sign-social text-center">
                    <span>Or Sign- in with</span>
                  </div>
                  <div className="sign-social-icon">
                    <Link to={""} className="sign-facebook">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9.034"
                        height="18.531"
                        viewBox="0 0 9.034 18.531"
                      >
                        <path
                          id="Path_2121121"
                          data-name="Path 212"
                          d="M183.106,757.2v-1.622c0-.811.116-1.274,1.39-1.274h1.621v-3.127h-2.664c-3.243,0-4.285,1.506-4.285,4.169v1.969h-2.085v3.127h1.969v9.265h4.054v-9.265h2.664l.347-3.243Z"
                          transform="translate(-177.083 -751.176)"
                          fill="#2467ec"
                        ></path>
                      </svg>
                      <span>Facebook</span>
                    </Link>
                    <Link to={""} className="sign-gmail">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21.692"
                        height="16.273"
                        viewBox="0 0 21.692 16.273"
                      >
                        <g id="gmail-01" transform="translate(0 -63.953)">
                          <path
                            id="Path_868365"
                            data-name="Path 863185"
                            d="M1.479,169.418H4.93v-8.381l-2.26-3.946L0,157.339v10.6a1.479,1.479,0,0,0,1.479,1.479Z"
                            transform="translate(0 -89.192)"
                            fill="#0085f7"
                          ></path>
                          <path
                            id="Path_863286"
                            data-name="Path 8683106"
                            d="M395.636,169.418h3.451a1.479,1.479,0,0,0,1.479-1.479v-10.6l-2.666-.248-2.264,3.946v8.381Z"
                            transform="translate(-378.874 -89.192)"
                            fill="#00a94b"
                          ></path>
                          <path
                            id="Path_8322687"
                            data-name="Path 831687"
                            d="M349.816,65.436,347.789,69.3l2.027,2.541,4.93-3.7V66.176A2.219,2.219,0,0,0,351.2,64.4Z"
                            transform="translate(-333.054)"
                            fill="#ffbc00"
                          ></path>
                          <path
                            id="Path_863088"
                            data-name="Path 868038"
                            d="M72.7,105.365l-1.932-4.08L72.7,98.956l5.916,4.437,5.916-4.437v6.409L78.619,109.8Z"
                            transform="translate(-67.773 -33.52)"
                            fill="#ff4131"
                            fillRule="evenodd"
                          ></path>
                          <path
                            id="Path_8682519"
                            data-name="Path 868921"
                            d="M0,66.176v1.972l4.93,3.7V65.436L3.55,64.4A2.219,2.219,0,0,0,0,66.176Z"
                            transform="translate(0)"
                            fill="#e51c19"
                          ></path>
                        </g>
                      </svg>
                      <span>Google</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reg section end here */}
    </>
  );
};

export default AdminRegister;
