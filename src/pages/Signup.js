import LogoTagline from "../images/LOGO_Tagline.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../Redux/actions/allActions";
import "../css/styles.css";

function SignUp() {
  let currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
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
    //console.log(register);
    e.preventDefault();
    //creating user data
    const response = await fetch("http://localhost:3500/signup", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",

      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: register.username,
        name: register.name,
        password: register.password,
      }),
    });
    const json = await response.json();
    console.log(json); // for testing
    if (json.success) {
      let user = { username: register.username };
      dispatch(allActions.userActions.setUser(user));
      console.log(currentUser); // for testing
      localStorage.setItem("username", register.username);
      localStorage.setItem("token", json.authToken);
    } else {
      alert("Email Id already exists");
    }
    const result = await fetch(
      "http://localhost:3500/customer/credits/createCredits",
      {
        // credentials: 'include',
        // Origin:"http://localhost:3000/login",

        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: register.username,
        }),
      }
    );
    let creditData = await result.json();
    console.log(creditData);
    if (creditData.success === true) {
      console.log(creditData);
      navigate(`/plans`);
    }
  }
  async function HandleGoogle() {
    console.log("hello");
    const response = await fetch("http://localhost:3500/auth/google", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",

      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
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
            <div className="input-group input-group-lg ">
              <input
                style={{ borderColor: "orange" }}
                placeholder="Email"
                name="username"
                value={register.username}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                onChange={onChange}
              />
            </div>
            <div className="input-group input-group-lg ">
              <input
                style={{ borderColor: "orange" }}
                placeholder="Full Name"
                name="name"
                value={register.name}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                onChange={onChange}
              />
            </div>
            <div className="input-group input-group-lg ">
              <input
                value={register.password}
                name="password"
                style={{ borderColor: "orange" }}
                placeholder="Password"
                type="password"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                onChange={onChange}
              />
            </div>
            <div className="input-group input-group-lg ">
              <input
                value={register.repass}
                name="repass"
                style={{ borderColor: "orange" }}
                type="password"
                placeholder="Re-enter Password"
                className="form-control"
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
          href="http://localhost:3500/auth/google"
          className="btn btn-danger btn-block mb-4 "
        >
          <i className="fab fa-google"></i> Sign Up with Google
        </a>
      </div>
    </div>
  );
}

export default SignUp;
