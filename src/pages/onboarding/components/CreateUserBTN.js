// This page is made by Rasmus

export default function CreateUserBTN(props) {
    return (
        <button onClick={props.link} className="CreateUserBTN">
            <h3>{props.account}</h3>
        </button>
    )
}