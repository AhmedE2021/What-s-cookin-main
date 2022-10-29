import { useLocation } from "react-router-dom";

export default function InstructionsTab() {
  const location = useLocation();
  console.log(location.state.instructions);
  return (
    <>
      <h2>{location.state.instructions}</h2>
    </>
  );
}
