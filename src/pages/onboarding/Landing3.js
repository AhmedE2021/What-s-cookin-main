import { useNavigate } from "react-router-dom";
import NextBTN from "./components/NextBTN";
import CameraScan from "./components/CameraScan";
import SearchField from "./components/SearchField";
export default function Landing3() {

  const navigate = useNavigate();
  function handleClick(){
    navigate("/landing4")
  }
 
return (
  <div className="returnDiv">

    <div className="backgroundImage">
    </div>

    <h1 className="headerWhite">What do you currently have at home? </h1>

    <SearchField />
    

    <div className="scanFoodContainer">
      <p>Or scan the barcode of what you have, and we will add them to your stock.</p>
      <CameraScan />
      <button className="openCameraButton">
        Open Camera
      </button>
    </div>



    <NextBTN link={handleClick} />
    

  

</div>
)


}