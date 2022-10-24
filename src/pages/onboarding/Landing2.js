import { useNavigate } from "react-router-dom";
import PreferenceCard from "../../components/PreferenceCard";

export default function Landing2() {

  const navigate = useNavigate();
  function handleClick(){
    navigate("/landing3")
  }
 
return (
  <div className="overflowHidden">

  <div className="test">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,128L80,154.7C160,181,320,235,480,250.7C640,267,800,245,960,245.3C1120,245,1280,267,1360,277.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
  </div>
    
  <div className="backgroundShape">njknjknjk</div>

  <div class="cardFlexContainer">
    <PreferenceCard name="Pasta"/>
    <PreferenceCard name="Meat"/>
    <PreferenceCard name="Easy"/>
    <PreferenceCard name="Vegan"/>
    <PreferenceCard name="Soup"/>
    <PreferenceCard name="Deserts"/>
  </div>

  </div>
)


}