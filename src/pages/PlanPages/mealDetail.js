import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import TopNavbar from "../../components/TopNavbar";
import styles from "../../css/plans.module.css";
import logoTagline from "../../images/LOGO_Tagline.png";
import infoStyles from "../../css/planinfo.module.css";
import pricing from "../../mealsData/pricing";
import allPlansMealData from "../../mealsData/allPlansMealData";
import getAllPlans from "../../getData/getAllPlans";
import planValidator from "../../daysPlan/planValidator";
import getUser from "../../getData/getUser";
import { notify } from "../../alerts/toastify";
import AltFooter from "../../components/altfooter";

let getLastPlan = getAllPlans.getLastPlan;

function MealDetail() {
  let navigate = useNavigate();
  let { planType, day, meal } = useParams();
  let dishes = allPlansMealData[planType][day][meal];
  console.log(dishes, "dishes");
  console.log(planType, day);
  let daywisePricing = pricing[planType];
  let mealType = ["Breakfast", "lunch", "Dinner"];

  return (
    <>
      <TopNavbar className="bg-sky-700 text-lg" />
      <div className={infoStyles.body}>
        <div
          onClick={() => {
            navigate(-1);
          }}
          className={infoStyles.pdBack}
        >
          <i class="fa-solid fa-backward"></i>
        </div>
        <div className={infoStyles.cardMealDetail}>
          <div className={infoStyles.dayBar}>
            <p style={{ marginTop: "2%", fontSize: "2.5vh" }}>
              {meal.toUpperCase()}
            </p>
          </div>
          <div className={infoStyles.cardInnerMeals}>
            {dishes.map((dish, i) => {
              if (i % 2 === 0) {
                return (
                  <div style={{ backgroundColor: "rgba(48, 47, 107, 0.8)" }}>
                    <p>{dish}</p>
                  </div>
                );
              } else {
                return (
                  <div style={{ backgroundColor: "rgba(99, 47, 107, 0.8)" }}>
                    <p>{dish}</p>
                  </div>
                );
              }
            })}
          </div>

          {/* {mealType.map((meal) => {
            return (
              <div
                onClick={() => {
                  navigate(`/plans/${planType}/${day}/${meal}`);
                }}
                type="button"
                className={infoStyles.mealTypeBar}
              >
                <h3>{meal}</h3>
              </div>
            );
          })} */}
        </div>
        <div className={infoStyles.details}>
          <div className={infoStyles.pricing}>
            <div>
              <p>7 day Plan:</p>
              <p>{daywisePricing[7]}</p>
            </div>
            <div>
              <p>14 day Plan:</p>
              <p>{daywisePricing[14]}</p>
            </div>
            <div>
              <p>28 day Plan:</p>
              <p>{daywisePricing[28]}</p>
            </div>
            <div>
              <p>custom:</p>
              <p>{daywisePricing.custom}</p>
            </div>
          </div>
          {/* <div type="button" className={infoStyles.addAddr}>
            <h3>Add Address</h3>
          </div> */}
          <div
            type="button"
            onClick={async () => {
              if (!localStorage.getItem("token"))
                navigate(`/plans/${planType}/checkout`);
              else {
                // let user = await getUser(localStorage.getItem("username"));
                let plan = await getLastPlan(localStorage.getItem("user_id"));
                if (!planValidator(plan.end)) {
                  navigate(`/plans/${planType}/checkout`);
                } else {
                  notify(
                    "You already have a valid plan, You can change your plan instead"
                  );
                  setTimeout(() => {
                    navigate(`/dashboard`);
                  }, 2000);
                }
              }
            }}
            className={infoStyles.checkout}
          >
            <p>Proceed to Checkout</p>
          </div>
        </div>
        <AltFooter text="The First Wealth Is Health" />
      </div>
      <Footer />
    </>
  );
}

export default MealDetail;
