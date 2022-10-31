import { useLocation } from "react-router-dom";

export default function CategoryResult () {

    const location = useLocation();
    console.log(location.state.instructions);
    return(
<div>
    <h2>{location.state.name}</h2>
</div>

    )
}