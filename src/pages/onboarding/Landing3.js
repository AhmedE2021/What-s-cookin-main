import { useNavigate } from "react-router-dom";
import NextBTN from "../../components/NextBTN";
import CameraScan from "../../components/CameraScan";
export default function Landing3() {

  const navigate = useNavigate();
  function handleClick(){
    navigate("/landing4")
  }
 
return (
  <div>

  <div className="backgroundImage">

    <h1 className="header">What do you currently have at home? </h1>

  </div>

  <div className="scanFoodContainer">
    <h3>Or scan the barcode of what you have, and we will add them to your stock.</h3>
    <CameraScan />
    <h3 className="openCamera"><a href="#">Open Camera</a></h3>
  </div>



    <NextBTN link={handleClick} />
    

  

</div>
)


}