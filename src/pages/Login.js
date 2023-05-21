import LogoTagline from "../images/LOGO_Tagline.png";
import logo from "../images/LOGO_Tagline.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "../css/styles.css";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
    });
    if (response.status === 200) {
      const json = await response.json();
      console.log(json);
      if (json.success) {
        navigate("/plans");
      } else {
        alert("Check email and password");
      }
    } else {
      alert("Check email and password");
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
          <button type="submit" className="btn btn-warning">
            Check Plans
          </button>
        </div>
        <div
          style={{ flexDirection: "column", alignItems: "center" }}
          className="card1"
        >
          <form className="loginForm">
            <div class="input-group input-group-lg ">
              <input
                style={{ borderColor: "orange" }}
                placeholder="Email"
                value={credentials.username}
                name="username"
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                onChange={onChange}
              />
            </div>
            <div class="input-group input-group-lg ">
              <input
                style={{ borderColor: "orange" }}
                value={credentials.password}
                name="password"
                type="password"
                placeholder="Password"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                onChange={onChange}
              />
            </div>
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
              <button className="btn btn-dark btn-lg"> SignUp</button>
            </Link>
          </div>
        </div>
        <a
          type="button"
          href="/auth/google"
          class="btn btn-danger btn-block mb-4 "
        >
          <i class="fab fa-google"></i> Sign in with Google
        </a>
      </div>
    </div>
  );
}

export default Login;
