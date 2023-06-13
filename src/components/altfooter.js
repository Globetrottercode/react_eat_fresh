import Footer from "./Footer";
import "../css/styles.css";

function AltFooter(props) {
  return (
    <div className="altFooter">
      <div className="phoneFooter">
        <span>{props.text}</span>
      </div>
      <div className="altfooterIcons">
        <i class="fa-brands fa-facebook fa-2x "></i>
        <i class="fa-brands fa-instagram  fa-2x"></i>{" "}
        <i class="fa-regular fa-envelope fa-2x"></i>
      </div>
      <div className="altfooterCopyRight">
        <span
          style={
            {
              // fontWeight: "bolder",
              // fontSize: "2vh",
              // color: "rgba(46, 114, 22, 1)",
            }
          }
        >
          <i class="fa-regular fa-copyright fa-1x"></i> COPYRIGHT EATFRESH
        </span>
      </div>
    </div>
  );
}

export default AltFooter;
