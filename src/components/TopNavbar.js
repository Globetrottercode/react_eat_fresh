import brand from "../images/LOGO.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../css/styles.css";

function TopNavbar() {
  let navigate = useNavigate();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark  "
        style={{ backgroundColor: "rgba(255, 165, 0, 0.80)" }}
      >
        <i style={{ marginLeft: "4%" }} className="navbar-brand">
          {" "}
          <img style={{ height: "7.5vh" }} src={brand} />{" "}
        </i>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          style={{ marginRight: "7%" }}
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li style={{ marginLeft: "4%" }} className="nav-item">
              <a
                onClick={() => {
                  navigate("/plans");
                }}
                className="nav-link"
              >
                <button className="navButton">
                  <p style={{ marginTop: "8%", fontSize: "2vh" }}>Plans</p>
                </button>
              </a>
            </li>
            <li style={{ marginLeft: "4%" }} className="nav-item">
              <a className="nav-link">
                <button className="navButton">
                  <p style={{ marginTop: "8%", fontSize: "2vh" }}>Dashboard</p>
                </button>
              </a>
            </li>
            <li style={{ marginLeft: "4%" }} className="nav-item">
              <a type="button" className="nav-link">
                <i
                  className="fa-sharp fa-solid fa-gear "
                  style={{
                    color: "#030507",
                    marginTop: "1vh",
                    fontSize: "4vh",
                  }}
                ></i>
              </a>
            </li>
            <li style={{ marginLeft: "4%" }} className="nav-item">
              <a type="button" className="nav-link">
                <i
                  className="fa-solid fa-user "
                  style={{
                    color: "#000000",
                    marginTop: "1vh",
                    fontSize: "4vh",
                  }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default TopNavbar;

{
  /* <i
className="fa-sharp fa-solid fa-gear fa-3x"
style={{ color: "#030507" }}
></i> */
}
