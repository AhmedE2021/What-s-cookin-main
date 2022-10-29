import { useNavigate } from "react-router-dom";
import "../../App.css"
import "../../styles/onboarding.css"
import LogoFrontpage from "../../assets/images/Logo2.png"
import CreateUserBTN from "./components/CreateUserBTN";


export default function Landing() {

  //Ahmed//The useNavigate hook returns a on click function that lets you navigate to next page 
  const navigate = useNavigate();
  function handleClick(){
    navigate("/landing2")
  }
  
return (
    <div>

      <div className="logoContainer">
        <img className="logo" alt="test" src={LogoFrontpage} />
      </div>

      <div class="frontpageText">
        <h1 className="header">What's Cookin'</h1>
        
        <p>We all need to eat, but doing so shouldnt have to be expensive.
        Utilizing your preferences and the ingredients you have available, we suggest recipes and show, what they will cost to make.</p>
      </div>
        
      <div class="createButtons">
        <CreateUserBTN link={handleClick} account="Login with Google"/>
        <CreateUserBTN link={handleClick} account="Login with Facebook"/>
        <CreateUserBTN link={handleClick} account="Cookin Account"/>
      </div>

      <button onClick={handleClick} className="createAccount">
        Or create an account
      </button>
        
      {/* <button onClick={handleClick}>go to preferences page</button> */}
    </div>
)



}