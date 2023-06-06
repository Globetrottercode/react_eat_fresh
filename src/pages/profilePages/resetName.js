import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import LOGO from "../../images/LOGO.png";
import updateName from "../../getData/updateName";
import { useState } from "react";
import getUser from "../../getData/getUser";
import { notify } from "../../alerts/toastify";
import { useNavigate } from "react-router-dom";
import "../../css/styles.css";

function ResetName() {
  let [name, setName] = useState("");
  let navigate = useNavigate();
  async function handleReset() {
    if (name < 3) {
      notify("Enter your name !");
      return;
    }
    let result = await updateName(localStorage.getItem("username"), name);
    if (result[0].name === name) {
      notify("Name updated succesfully !");
      let user = await getUser(localStorage.getItem("username"));
      localStorage.setItem("user", JSON.stringify(user));
      console.log("before hook");
      navigate("/profile");
    }
  }
  return (
    <>
      <TopNavbar />
      <div className="resetBody">
        <img style={{ height: "30%" }} src={LOGO} alt="logo" />
        <div className="resetCard">
          <div className="resetLabel">
            <p>Reset Name</p>
          </div>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            className="resetInput"
            placeholder="New Name"
          ></input>
          <div onClick={handleReset} className="resetButton">
            <p>Reset</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResetName;
