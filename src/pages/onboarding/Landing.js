// This page is made by Rasmus (except a function by Ahmed)

import { useNavigate } from "react-router-dom";
import "../../styles/onboarding.css"
import LogoFrontpage from "../../assets/images/Logo2.png"
import CreateUserBTN from "./components/CreateUserBTN";


export default function Landing() {

  //Ahmed//The useNavigate hook returns an on click function that lets you navigate to next page 
  const navigate = useNavigate();
  function handleClick(){
    navigate("/landing2")
  }
  
return (
    <div className="landingPageFlex returnDiv">

      <div className="logoContainer">
        <img className="logo" alt="test" src={LogoFrontpage} />
      </div>

      <div class="frontpageText">
        <h1 className="headerFrontpage">What's Cookin'</h1>
        
        <p>We all need to eat, but doing so shouldnt have to be expensive.
        Utilizing your preferences and the ingredients you have available, we suggest recipes and show, what they will cost to make.</p>

        <p style={{fontWeight: "bold"}}>Create an account to get started today!</p>
      </div>
        
      <div class="createButtons">
        <CreateUserBTN link={handleClick} account="Login with Google"/>
        <CreateUserBTN link={handleClick} account="Login with Facebook"/>
        <CreateUserBTN link={handleClick} account="Cookin Account"/>
      </div>

      <button onClick={handleClick} className="createAccount">
        Or create an account
      </button>
        
    </div>
)



}