import { useNavigate } from "react-router-dom";

export default function GoBackNav() {
  window.onscroll = function () {
    let prevScrollpos = window.pageYOffset;
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navBar").style.top = "0";
    } else {
      document.getElementById("navBar").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
  };
  let navigate = useNavigate();

  return (
    <div className="go-back-nav-wrapper" id="navBar">
      <h2 className="go-back-icon" onClick={() => navigate(-1)}>
        {" "}
        &#x2190;{" "}
      </h2>
    </div>
  );
}
