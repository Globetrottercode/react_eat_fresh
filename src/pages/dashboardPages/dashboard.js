import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import dashboard from "../../css/dashboard.module.css";
import LOGO from "../../images/LOGO_Tagline.png";
import getAllAddress from "../../getData/getAllAddress";
import { useNavigate } from "react-router-dom";
import getUser from "../../getData/getUser";
import { notify } from "../../alerts/toastify";
import AltFooter from "../../components/altfooter";

let allPlans = [
  ["vegBasic", "Veg Basic"],
  ["vegPremium", "Veg Premium"],
  ["nonVegBasic", "Non Veg Basic"],
  ["nonVegPremium", "Non Veg Premium"],
];

let allSchemes = [
  ["1", "Custom 1 Day"],
  ["2", "Custom 2 Day"],
  ["3", "Custom 3 Day"],
  ["4", "Custom 4 Day"],
  ["5", "Custom 5 Day"],
  ["6", "Custom 6 Day"],
  ["7", "7 Day Plan"],
  ["14", "14 Day Plan"],
  ["28", "28 Day Plan"],
];

function assignSelectedPlan(plan) {
  let selectedPlan;
  for (let i = 0; i < allPlans.length; i++) {
    if (plan.selectedPlan !== allPlans[i][0]) {
      continue;
    }
    selectedPlan = allPlans[i][1];
    break;
  }
  return selectedPlan;
}

function assignSelectedDays(plan) {
  let selectedDays;
  for (let i = 0; i < allSchemes.length; i++) {
    if (plan.selectedDays !== allSchemes[i][0]) {
      continue;
    }
    selectedDays = allSchemes[i][1];
    break;
  }
  return selectedDays;
}

function Dashboard() {
  console.log("clicked", JSON.parse(localStorage.getItem("clicked")));
  localStorage.removeItem("clicked"); // removing clicks made for payments
  console.log("clicked", JSON.parse(localStorage.getItem("clicked")));
  let date = new Date();
  let curr =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  let allowChange = true;
  // if (curr === localStorage.getItem("changeDate")) {
  //   // if current date equals the change date user wont be allowed to change plan
  //   allowChange = false;
  // }
  let navigate = useNavigate();
  let selectedDays;
  let selectedPlan;
  let plan = null;
  let credits = localStorage.getItem("credits");
  let planValid = JSON.parse(localStorage.getItem("planValid"));
  if (planValid) {
    plan = JSON.parse(localStorage.getItem("lastPlan"));
    selectedPlan = assignSelectedPlan(plan);
    selectedDays = assignSelectedDays(plan);
    console.log(curr, plan.planChangeDate);
    if (curr === plan.planChangeDate) {
      console.log("matched");
      //if no change date available then ,it wont enter this block
      //if current date equals the change date user wont be allowed to change plan
      allowChange = false;
    } else {
      console.log("not matched");
    }
  }

  console.log(
    "plan valid :" + planValid,
    " plan :" +
      plan +
      " credits :" +
      credits +
      " selected Plan :" +
      selectedPlan +
      " selected Days :" +
      selectedDays
  );
  async function addrBtnClick() {
    // let user = await getUser(localStorage.getItem("username"));
    let allAddress = await getAllAddress(localStorage.getItem("user_id"));
    localStorage.setItem("allAddress", JSON.stringify(allAddress));
    console.log(JSON.parse(localStorage.getItem("allAddress")));
    navigate("/dashboard/addresses");
  }

  return (
    <>
      <TopNavbar />
      <div className={dashboard.body}>
        <div className={dashboard.left}>
          <img style={{ height: "38.5vh" }} src={LOGO} />
          <div style={{ textAlign: "center" }}>
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
              <p className={dashboard.text}>My Plans</p>
            </div>
            {planValid ? (
              <div className={dashboard.planType}>
                {" "}
                <p className={dashboard.text}>{selectedPlan}</p>
              </div>
            ) : (
              <div className={dashboard.planType}>
                {" "}
                <p className={dashboard.text}>No Plans</p>
              </div>
            )}
            {planValid ? (
              <div className={dashboard.planDays}>
                <p className={dashboard.text}>{selectedDays}</p>
              </div>
            ) : (
              ""
            )}
            {planValid ? (
              <div className={dashboard.start}>
                <p className={dashboard.text}>Start :</p>{" "}
                <p className={dashboard.text}>{plan.start}</p>
              </div>
            ) : (
              ""
            )}
            {planValid ? (
              <div className={dashboard.end}>
                <p className={dashboard.text}>End :</p>{" "}
                <p className={dashboard.text}>{plan.end}</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={dashboard.cardRight}>
            <div className={dashboard.creditsCard}>
              <div className={dashboard.creditLabel}>
                <p className={dashboard.text}>Credits</p>
              </div>
              <div className={dashboard.creditValue}>
                <p className={dashboard.text}>INR {credits}</p>
              </div>
            </div>
            <div
              onClick={addrBtnClick}
              type="button"
              className={dashboard.addressBtn}
            >
              <p className={dashboard.text}>Addresses</p>
            </div>
            <div
              onClick={() => {
                if (planValid) {
                  if (allowChange) {
                    navigate("/dashboard/changePlan");
                  } else {
                    notify("You can't change plans twice in a day");
                  }
                } else {
                  notify("You currently have no valid plans to change");
                }
              }}
              type="button"
              className={dashboard.changePlanBtn}
            >
              <p className={dashboard.text}>Change Plan</p>
            </div>
          </div>
        </div>
        <AltFooter text="Focus, On Your Goals , We Have Got Your Meals Covered" />
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
