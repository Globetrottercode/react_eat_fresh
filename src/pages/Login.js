import LogoTagline from "../images/LOGO_Tagline.png";
import logo from "../images/LOGO_Tagline.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../Redux/actions/allActions";
import { notify } from "../alerts/toastify";

import "../css/styles.css";
import getUser from "../getData/getUser";

function Login() {
  let [isOn, setIsOn] = useState(false);
  let currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  //
  function handleEye() {
    setIsOn(!isOn);
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  async function handleClick(e) {
    console.log(credentials);
    e.preventDefault();
    const response = await fetch("http://localhost:3500/customer/login", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",

      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      // body: JSON.stringify({
      //   username: credentials.username,
      //   password: credentials.password,
      // }),
      body: new URLSearchParams({
        username: credentials.username,
        password: credentials.password,
      }),
    });
    if (response.status === 200) {
      const json = await response.json();
      console.log(json); // for testing
      if (json.success) {
        let user = { username: credentials.username };
        dispatch(allActions.userActions.setUser(user));
        console.log(currentUser); // for testing
        localStorage.setItem("username", credentials.username);
        localStorage.setItem("token", json.authToken);
        let loginUser = await getUser(credentials.username);
        localStorage.setItem("user_id", loginUser._id);
        // console.log("CHECK CHECK :", localStorage.getItem("user_id")); // for testing
        navigate("/plans");
      } else {
        notify("Check email and password");
      }
    } else {
      notify("Check email and password");
    }
  }

  return (
    <div className="logincontain">
      <div className="left">
        <img
          style={{
            flexGrow: "1",
          }}
          className="loginlogo"
          src={logo}
          alt="React Logo"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexGrow: "2",
          }}
        >
          <h1 style={{ fontWeight: "bolder" }}> Solving </h1>
          <h1 style={{ fontWeight: "bolder" }}>Your Day to Day </h1>
          <h1 style={{ fontWeight: "bolder" }}>
            {" "}
            <span style={{ color: "#519938" }}>Health</span>
            <span style={{ color: "orange" }}> Needs</span>{" "}
          </h1>
        </div>
      </div>
      <div className="right">
        <div className="rightUpper">
          <span
            onClick={() => {
              navigate("/plans");
            }}
          >
            Plans
          </span>
        </div>
        <div
          style={{ flexDirection: "column", alignItems: "center" }}
          className="card1"
        >
          <form className="loginForm">
            <div className="input-group input-group-lg ">
              <input
                style={{ borderColor: "orange" }}
                placeholder="Email"
                value={credentials.username}
                name="username"
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                onChange={onChange}
              />
            </div>
            {isOn ? (
              <div className="input-group input-group-lg ">
                <input
                  style={{ borderColor: "orange" }}
                  value={credentials.password}
                  name="password"
                  type="text"
                  placeholder="Password"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  onChange={onChange}
                />
                <div onClick={handleEye} className="eye">
                  <i class="fa-sharp fa-regular fa-eye"></i>
                </div>
              </div>
            ) : (
              <div className="input-group input-group-lg ">
                <input
                  style={{ borderColor: "orange" }}
                  value={credentials.password}
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  onChange={onChange}
                />
                <div onClick={handleEye} className="eye">
                  <i class="fa-sharp fa-regular fa-eye-slash"></i>
                </div>
              </div>
            )}
            {/* <div className="input-group input-group-lg ">
              <input
                style={{ borderColor: "orange" }}
                value={credentials.password}
                name="password"
                type="password"
                placeholder="Password"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                onChange={onChange}
              />
            </div> */}
            <button
              onClick={handleClick}
              type="submit"
              className="btn btn-warning btn-lg"
            >
              Sign in
            </button>
          </form>
          <div style={{ marginBottom: "4%" }}>
            <span style={{ fontWeight: "bolder" }}>Not a Member ? </span>

            <Link to="/signup" reloadDocument>
              <span> SignUp</span>
            </Link>
          </div>
        </div>
        <a
          type="button"
          href="http://localhost:3500/auth/google"
          className="btn btn-danger btn-block mb-4 "
        >
          <i className="fab fa-google"></i> Sign In with Google
        </a>
      </div>
    </div>
  );
}

export default Login;
