import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import change from "../../css/dashboard.module.css";

function ChangePlan() {
  return (
    <>
      <TopNavbar />
      <div className={change.changeBody}>
        <div className={change.changeLeft}>
          <div className={change.changeCurrPlan}>
            <div className={change.changeCurrPlanLabel}></div>
            <div className={change.changeCurrPlanDisplay}></div>
          </div>
          <div className={change.changeText}>
            <h3 style={{ fontWeight: "bolder" }}> Let food be thy medicine </h3>
            <h3 style={{ fontWeight: "bolder" }}>
              {" "}
              thy <span style={{ color: "#519938" }}>medicine</span> shall be
              thy
              <span style={{ color: "orange" }}> food</span>{" "}
            </h3>
          </div>
        </div>
        <div className={change.changeRight}></div>
      </div>
      <Footer />
    </>
  );
}

export default ChangePlan;
