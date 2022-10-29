import SearchIcon from "../assets/images/searchIcon.png"

export default function SearchField() {
    return (
        <div className="SearchField">
            <img src={SearchIcon} alt="search for food you have" className="searchIcon"></img>
            <label>
                <input type="text" name="name" placeholder="Search for Ingredients"/>
            </label>
        </div>
    )
}