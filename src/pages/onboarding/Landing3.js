import { useNavigate } from "react-router-dom";
import NextBTN from "../../components/NextBTN";
import CameraScan from "../../components/CameraScan";
import SearchField from "../../components/SearchField";
export default function Landing3() {

  const navigate = useNavigate();
  function handleClick(){
    navigate("/landing4")
  }
 
return (
  <div>

  <div className="backgroundImage">

    <h1 className="headerWhite">What do you currently have at home? </h1>

  </div>

  <SearchField />
  

  <div className="scanFoodContainer">
    <h3>Or scan the barcode of what you have, and we will add them to your stock.</h3>
    <CameraScan />
    <button className="openCameraButton">
      Open Camera
    </button>
  </div>



    <NextBTN link={handleClick} />
    

  

</div>
)


}