import Footer from "../../components/Footer";
import TopNavbar from "../../components/TopNavbar";
import styles from "../../css/plans.module.css";
import logoTagline from "../../images/LOGO_Tagline.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import createCredits from "../../getData/createCredits";
import getCredits from "../../getData/getCredits";
import sendMail from "../../getData/sendMail";
import { signUpMessage } from "../../messages/emailMessage";
import { signUpSubject } from "../../messages/emailSubject";
import AltFooter from "../../components/altfooter";

function Plans() {
  let { username, token, id, name } = useParams();
  console.log("username and token : " + username, token, id);
  if (username !== undefined && token !== undefined && token !== undefined) {
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);
    localStorage.setItem("user_id", id);
    async function create() {
      let credits = await getCredits(id);
      if (credits === -1) {
        let data = await createCredits(id);
        console.log("created credits: " + data);
        let emailData = await sendMail(
          username,
          signUpMessage(name),
          signUpSubject()
        );
        console.log("emailData : ", emailData);
      } else {
        console.log("existing credits");
      }
    }
    create();
  }
  console.log(localStorage.getItem("token"), "token");
  console.log(localStorage.getItem("username"), "username");
  const navigate = useNavigate();
  return (
    <>
      <TopNavbar className="bg-sky-700 text-lg" />
      <div className={styles.plansBody}>
        <div className={styles.dashLeft}>
          <img style={{ height: "30vh" }} src={logoTagline} />
          <div className={styles.dashText}>
            <h2 style={{ fontWeight: "bolder" }}> Solving </h2>
            <h2 style={{ fontWeight: "bolder" }}>Your Day to Day </h2>
            <h2 style={{ fontWeight: "bolder" }}>
              {" "}
              <span style={{ color: "#519938" }}>Health</span>
              <span style={{ color: "orange" }}> Needs</span>{" "}
            </h2>
          </div>
        </div>
        <div className={styles.dashRight}>
          <div className={styles.mealPlansLabel}>
            <p>Plans</p>
          </div>
          <div className={styles.mealPlans}>
            <div
              onClick={() => {
                navigate("/plans/nonVegBasic");
              }}
              type="button"
              style={{ backgroundColor: "rgba(99, 47, 107, 0.8)" }}
              className={styles.planType}
            >
              <p>NON-VEG BASIC</p>
            </div>

            <div
              onClick={() => {
                navigate("/plans/vegBasic");
              }}
              type="button"
              style={{ backgroundColor: "rgba(99, 47, 107, 0.8)" }}
              className={styles.planType}
            >
              <p>VEG BASIC</p>
            </div>
            <div
              onClick={() => {
                navigate("/plans/nonVegPremium");
              }}
              type="button"
              style={{ backgroundColor: "rgba(99, 47, 107, 0.8)" }}
              className={styles.planType}
            >
              <p>NON-VEG PREMIUM</p>
            </div>
            <div
              onClick={() => {
                navigate("/plans/vegPremium");
              }}
              type="button"
              style={{
                backgroundColor: "rgba(99, 47, 107, 0.8)",
              }}
              className={styles.planType}
            >
              <p>VEG PREMIUM</p>
            </div>
          </div>
          {/* <div
            onClick={() => {
              navigate("/plans/customize");
            }}
            type="button"
            className={styles.customPlan}
          >
            <h3> CUSTOMIZE </h3>
          </div> */}
        </div>
        <AltFooter text="Solving Your Day to Day Health Needs" />
      </div>

      <Footer />
    </>
  );
}

export default Plans;
