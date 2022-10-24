export default function CreateUserBTN(props) {
    return (
        <button onClick={props.link} className="createUserBTN">
            <h3>{props.account}</h3>
        </button>
    )
}