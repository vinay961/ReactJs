import './Search.css'
function Search() {
    const newLocal = "Pokemon name "
    return(
        <div className="search">
            <h1>Pokemon API</h1>
            <input className="InputField"  type="text" placeholder="Pokemon name ..."/>
        </div>
    )
}

export default Search