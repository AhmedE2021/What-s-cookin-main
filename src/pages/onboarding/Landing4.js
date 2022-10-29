import { useNavigate } from "react-router-dom";
import LogoFrontpage from "../../assets/images/Logo2.png"


export default function Landing4() {

  const navigate = useNavigate();
  function handleClick(){
    navigate("/landing5")
  }
 
return (
    <div>
      <div className="logoContainer">
        <img className="logo" alt="test" src={LogoFrontpage} />
      </div>

      

      <div class="frontpageText">
        <h1 className="header">You're set!</h1>
        
        <p>We will customize your homescreen to reflect your preferences. They can always be changed again under Settings.</p>
      </div>

      <button className="saveMoneyButton">
      <h3>Start saving money</h3>
      </button>
    </div>
)


}