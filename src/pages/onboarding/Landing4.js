// This page is made by Rasmus

import { useNavigate } from "react-router-dom";
import LogoFrontpage from "../../assets/images/Logo2.png"


export default function Landing4() {

  const navigate = useNavigate();
  function handleClick(){
    navigate("/home")
  }
 
return (
    <div className="returnDiv lastPageReturnDiv">
      <div className="logoContainer" id="logoContainer">
        <img className="logo" alt="test" src={LogoFrontpage} />
      </div>

      

      <div class="frontpageText">
        <h1 className="header">You're set!</h1>
        
        <p>We will customize your homescreen to reflect your preferences. They can always be changed again under Settings.</p>
      </div>

      <button className="saveMoneyButton" onClick={handleClick}>
      Start saving money
      </button>
    </div>
)


}