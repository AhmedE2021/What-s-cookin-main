import { useLocation } from "react-router-dom";

export default function InstructionsTab() {
  const location = useLocation();
  console.log(location.state.instructions);
  console.log(location.state.price);
  const instructions = location.state.instructions;
  return (
    <>
      {instructions.map((instruction) => (
        <div className="instr_holder">
          <h2>{instruction}</h2>
        </div>
      ))}
    </>
  );
}
