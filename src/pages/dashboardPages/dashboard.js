import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import dashboard from "../../css/dashboard.module.css";
import LOGO from "../../images/LOGO_Tagline.png";

function Dashboard() {
  return (
    <>
      <TopNavbar />
      <div className={dashboard.body}>
        <div className={dashboard.left}>
          <img style={{ height: "38.5vh" }} src={LOGO} />
          <div>
            <h3 style={{ fontWeight: "bolder" }}> Let food be thy medicine </h3>
            <h3 style={{ fontWeight: "bolder" }}>
              {" "}
              thy <span style={{ color: "#519938" }}>medicine</span> shall be
              thy
              <span style={{ color: "orange" }}> food</span>{" "}
            </h3>
          </div>
        </div>
        <div className={dashboard.right}>
          <div className={dashboard.myPlanCard}>
            <div className={dashboard.myPlanLabel}>
              <p>My Plans</p>
            </div>
            <div className={dashboard.planType}></div>
            <div className={dashboard.planDays}></div>
            <div className={dashboard.start}></div>
            <div className={dashboard.end}></div>
          </div>
          <div className={dashboard.cardRight}>
            <div className={dashboard.creditsCard}>
              <div className={dashboard.creditLabel}>
                <p>My Plans</p>
              </div>
              <div className={dashboard.creditValue}></div>
            </div>
            <div className={dashboard.addressBtn}>
              <p>Addresses</p>
            </div>
            <div className={dashboard.changePlanBtn}>
              <p>Change Plan</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
