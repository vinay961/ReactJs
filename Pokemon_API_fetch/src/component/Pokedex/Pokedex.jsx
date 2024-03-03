import Pokemonlist from "../PokemonList/PokemonList"
import Search from "../Search/Search"
import './Pokedex.css'
function Pokedex(){
    return(
        <>

            <Search />
            <h2 className="name">Pokemon</h2>
            <Pokemonlist />
        </>
    )
}

export default Pokedex