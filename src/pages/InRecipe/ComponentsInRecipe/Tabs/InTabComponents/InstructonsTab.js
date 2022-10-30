import { useLocation } from "react-router-dom";

export default function InstructionsTab() {
  const location = useLocation();
  console.log(location.state.instructions);
  console.log(location.state.price);
  return (
    <>
      <h2>{location.state.instructions}</h2>
      <h2>{location.state.time}</h2>
    </>
  );
}
