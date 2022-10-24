import { useNavigate } from "react-router-dom";

export default function Landing6() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }
  const navigate2 = useNavigate();
  function handleClick2() {
    navigate("/InRecipe");
  }

  return (
    <div>
      <h1>sign up done</h1>
      <button onClick={handleClick}>Start Saving Money</button>
      <button onClick={handleClick2}>In recipe page</button>
    </div>
  );
}
