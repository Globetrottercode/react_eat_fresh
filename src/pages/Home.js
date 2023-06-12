import Logo from "../images/LOGO.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "../css/home.module.css";

function Home() {
  let navigate = useNavigate();
  let [city, setCity] = useState("");
  function handleChange(event) {
    setCity(event.target.value);
    // console.log(city);
  }
  function handleClick() {
    console.log(city);
  }
  return (
    <div className={styles.homecontain}>
      <div className={styles.top}>
        <img className={styles.homelogo} src={Logo} alt="React Logo" />{" "}
        <div>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            style={{ width: "10vw", borderRadius: "3vh" }}
            className="btn btn-dark btn-lg"
          >
            {" "}
            Login{" "}
          </button>{" "}
        </div>
        {/* <Link to="/signup" reloadDocument className={styles.signup}>
          <button className="btn btn-dark btn-lg"> SignUp</button>
        </Link> */}
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
        {/* <div class="input-group input-group-lg ">
            <input
              style={{ borderColor: "orange" }}
              value={city}
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              onChange={handleChange}
            />
            <button
              onClick={handleClick}
              type="submit"
              className="btn btn-warning"
            >
              {" "}
              Check Plans{" "}
            </button>
          </div> */}
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
  );
}

export default Home;
