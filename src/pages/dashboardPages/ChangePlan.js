import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import change from "../../css/dashboard.module.css";

// if a user has a valid plan then only they come to this page, if a user has a valid plan the last
// plan was already stored in dashboard when the user goes through dashboard
let allPlans = [
  ["vegBasic", "Veg Basic"],
  ["vegPremium", "Veg Premium"],
  ["nonVegBasic", "Non Veg Basic"],
  ["nonVegPremium", "Non Veg Premium"],
];
let chosenPlan;
function assignPlan(planType) {
  for (let i = 0; i < allPlans.length; i++) {
    if (planType === allPlans[i][0]) {
      return allPlans[i][1];
    }
  }
}

function ChangePlan() {
  let plan = JSON.parse(localStorage.getItem("lastPlan"));
  let currentPlan = assignPlan(plan.selectedPlan);
  console.log(currentPlan);
  function handleChoose(e) {
    chosenPlan = e.target.value;
    console.log(e.target.value);
  }
  return (
    <>
      <TopNavbar />
      <div className={change.changeBody}>
        <div className={change.changeLeft}>
          <div className={change.changeCurrPlan}>
            <div className={change.changeCurrPlanLabel}>
              <p>Current Plan</p>
            </div>
            <div className={change.changeCurrPlanDisplay}>
              <p>{currentPlan}</p>
            </div>
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
        <div className={change.changeRight}>
          <div className={change.changechoosePlanLabel}>
            <p>Choose Plans</p>
          </div>
          {allPlans.map((plan, index) => {
            return plan[1] !== currentPlan ? (
              <div className={change.changeAvlPlans}>
                {" "}
                <input
                  onClick={handleChoose}
                  type="radio"
                  id={index}
                  name="age"
                  value={plan[1]}
                />
                <label style={{ fontSize: "3vh" }} for={index}>
                  {plan[1]}
                </label>
              </div>
            ) : (
              ""
            );
          })}
          <div type="button" className={change.changeProceed}>
            <p>Proceed</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function ChangePlanProcess() {
  let plan = JSON.parse(localStorage.getItem("lastPlan"));
  let currentPlan = assignPlan(plan.selectedPlan);
  return (
    <>
      <TopNavbar />
      <div className={change.changeBody}>
        <div className={change.changeLeft}>
          <div className={change.changeCurrPlan}>
            <div className={change.changeCurrPlanLabel}>
              <p>Current Plan</p>
            </div>
            <div className={change.changeCurrPlanDisplay}>
              <p>{currentPlan}</p>
            </div>
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
        <div className={change.changeRight}>
          <div className={change.changechoosePlanLabel}>
            <p>Plan</p>
          </div>

          <div type="button" className={change.changeProceed}>
            <p>Proceed</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { ChangePlan, ChangePlanProcess };
