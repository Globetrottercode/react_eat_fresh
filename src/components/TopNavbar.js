import brand from "../images/LOGO.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../css/styles.css";
import getAddress from "../getData/getAllPlans";
import getCredits from "../getData/getCredits";
import planValidator from "../daysPlan/planValidator";

let getLastPlan = getAddress.getLastPlan;

function TopNavbar() {
  let navigate = useNavigate();
  function handleLoginClick() {
    navigate("/login");
  }
  function handleLogoutClick() {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("selected_plan");
    localStorage.removeItem("selected_days");
    localStorage.removeItem("allAddress");
    localStorage.removeItem("selected_address");
    navigate("/login");
  }

  async function handleDashboardClick() {
    if (!localStorage.getItem("username")) {
      alert("Login first");
      return setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    let lastPlan = await getLastPlan(localStorage.getItem("username")); // getting last plan
    if (lastPlan.end) {
      localStorage.setItem("lastPlan", JSON.stringify(lastPlan));
      localStorage.setItem("planValid", planValidator(lastPlan.end)); // checking if last plan is valid
      console.log("last plan :", localStorage.getItem("lastPlan"));
      console.log("plan valid", localStorage.getItem("planValid"));
    } else {
      localStorage.setItem("planValid", false);
      console.log("plan valid", localStorage.getItem("planValid"));
      console.log("user never had a plan");
    }
    localStorage.setItem(
      "credits",
      await getCredits(localStorage.getItem("username"))
    );
    console.log(localStorage.getItem("credits"));
    // navigate("/dashboard");
  }

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
              <a onClick={handleDashboardClick} className="nav-link">
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
            {localStorage.getItem("username") ? (
              <li style={{ marginLeft: "4%" }} className="nav-item">
                <a
                  onClick={handleLogoutClick}
                  type="button"
                  className="nav-link"
                >
                  <i
                    className="fa-solid fa-right-from-bracket "
                    style={{
                      color: "#000000",
                      marginTop: "1vh",
                      fontSize: "4vh",
                      marginRight: "2vw",
                    }}
                  ></i>
                </a>
              </li>
            ) : (
              <li style={{ marginLeft: "4%" }} className="nav-item">
                <a
                  onClick={handleLoginClick}
                  type="button"
                  className="nav-link"
                >
                  <i
                    className="fa-solid fa-right-to-bracket "
                    style={{
                      color: "#000000",
                      marginTop: "1vh",
                      fontSize: "4vh",
                      marginRight: "2vw",
                    }}
                  ></i>
                </a>
              </li>
            )}
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
