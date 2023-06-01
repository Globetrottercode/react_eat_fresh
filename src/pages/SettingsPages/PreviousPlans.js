import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import previous from "../../css/settings.module.css";

let array = [1, 2, 3, 4, 5, 6, 7];

function PrevoiusPlans() {
  let allPlans = JSON.parse(localStorage.getItem("allPlans"));
  console.log("allPlans in prev Plans", allPlans);
  return (
    <>
      <TopNavbar />
      <div className={previous.prevbody}>
        <div className={previous.previousPlanLabel}>
          <p>Previous Plans</p>
        </div>
        <div className={previous.previousPlansCard}>
          {array.map((address, index) => {
            return (
              <div>
                <span style={{ fontSize: "2vh" }}>
                  {/* {address.saveAs} , {address.floor} ,{address.detailed} ,{" "}
                  {address.landmark} {address.city} , {address.pincode} */}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrevoiusPlans;
