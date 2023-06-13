import Logo from "../images/LOGO.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Plans from "./PlanPages/Plans";

import styles from "../css/home.module.css";

function Home() {
  let navigate = useNavigate();
  let token = localStorage.getItem("token");
  let [city, setCity] = useState("");
  function handleChange(event) {
    setCity(event.target.value);
    // console.log(city);
  }
  function handleClick() {
    console.log(city);
  }
  return (
    <>
      {token ? (
        <Plans />
      ) : (
        <div className={styles.homecontain}>
          <div className={styles.top}>
            <img className={styles.homelogo} src={Logo} alt="React Logo" />
            <div className={styles.login}>
              {" "}
              <button
                onClick={() => {
                  navigate("/login");
                }}
                style={{ width: "10vw", borderRadius: "3vh" }}
                className="btn btn-dark btn-lg"
              >
                {" "}
                Login{" "}
              </button>{" "}
            </div>
          </div>
          <div className={styles.mid}>
            <h2 className={styles.homeTagline}>
              <span style={{ color: "#519938" }}> Need Fresh </span>,{" "}
              <span style={{ color: "orange" }}> Hygienic Food ? </span>
            </h2>
            <h3 className={styles.home2Tagline}>
              {" "}
              Get hassle free breakfast, lunch and dinner.{" "}
            </h3>{" "}
            <div
              type="button"
              onClick={() => {
                navigate("/plans");
              }}
              className={styles.homeCheckPlansButton}
            >
              <p className={styles.homeBtnTxt}>Check Plans</p>
            </div>
            <h5 className={styles.popCities}>
              {" "}
              Popular Cities: Bangalore, Hyderabad, Mumbai, Pune, Delhi, Noida,
              Chennai, Kolkata, Gurgaon, Ahmedabad.{" "}
            </h5>
          </div>
          <div className={styles.bottom}>
            <i className="fa-brands fa-facebook fa-2x"></i>
            <i className="fa-brands fa-instagram fa-2x"></i>{" "}
            <i className="fa-regular fa-envelope fa-2x"></i>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
