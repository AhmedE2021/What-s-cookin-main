import { useNavigate } from "react-router-dom";
import PreferenceCard from "./components/PreferenceCard";
import NextBTN from "./components/NextBTN";

export default function Landing2() {

  const navigate = useNavigate();
  function handleClick(){
    navigate("/landing3")
  }
 
return (
  <div className="returnDiv">

    <div className="backgroundImage"></div>

      <h1 className="headerWhite">What are you interested in making? </h1>

      <div className="cardGridContainer" id="cardGridContainer">

        <PreferenceCard name="Pasta"/>
        <PreferenceCard name="Meat"/>
        <PreferenceCard name="Easy"/>
        <PreferenceCard name="Vegan"/>
        <PreferenceCard name="Soup"/>
        <PreferenceCard name="Desserts"/>
        
      </div>

    

    
    <NextBTN link={handleClick} />
    
    

  </div>
)


}