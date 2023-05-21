import LogoTagline from "../images/LOGO_Tagline.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/styles.css";

function SignUp() {
  const navigate = useNavigate();
  let [register, setRegister] = useState({
    username: "",
    name: "",
    password: "",
    repass: "",
  });

  function onChange(e) {
    setRegister({ ...register, [e.target.name]: e.target.value });
  }
  async function handleClick(e) {
    if (register.password !== register.repass) {
      alert("Passwords dont match !");
      return;
    }
    console.log(register);
    e.preventDefault();
    const response = await fetch("http://localhost:3500/signup", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: register.username,
        name: register.name,
        password: register.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      navigate(`/plans`);
    } else {
      alert("Email Id already exists");
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
          src={LogoTagline}
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
          <h1 style={{ fontWeight: "bolder" }}>
            {" "}
            We <span style={{ color: "#519938" }}>deliver</span> happiness and{" "}
          </h1>
          <h1 style={{ fontWeight: "bolder", color: "orange" }}>
            {" "}
            satisfaction
          </h1>
        </div>
      </div>
      <div className="right">
        <div className="rightUpper">
          <button type="submit" className="btn btn-warning">
            Check Plans
          </button>
        </div>
        <div className="card1" style={{ height: "50vh" }}>
          <form className="loginForm">
            <div class="input-group input-group-lg ">
              <input
                style={{ borderColor: "orange" }}
                placeholder="Email"
                name="username"
                value={register.username}
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
                placeholder="Full Name"
                name="name"
                value={register.name}
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                onChange={onChange}
              />
            </div>
            <div class="input-group input-group-lg ">
              <input
                value={register.password}
                name="password"
                style={{ borderColor: "orange" }}
                placeholder="Password"
                type="password"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                onChange={onChange}
              />
            </div>
            <div class="input-group input-group-lg ">
              <input
                value={register.repass}
                name="repass"
                style={{ borderColor: "orange" }}
                type="password"
                placeholder="Re-enter Password"
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
              Sign Up !
            </button>
          </form>
        </div>
        <a
          type="button"
          href="/auth/google"
          class="btn btn-danger btn-block mb-4 "
        >
          <i class="fab fa-google"></i> Sign Up with Google
        </a>
      </div>
    </div>
  );
}

export default SignUp;
