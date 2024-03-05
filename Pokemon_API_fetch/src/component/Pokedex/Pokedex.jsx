import { useEffect } from "react"
import { useState } from "react"
import PokemonDetails from "../PokemonDetails/PokemonDetails"
import Pokemonlist from "../PokemonList/PokemonList"
import Search from "../Search/Search"
import './Pokedex.css'
function Pokedex(){
    const [searchTerm,setSearchTerm] = useState('')
    return(
        <>

            <Search updateSearchTerm={setSearchTerm} />
            <h2 className="name">Pokemon</h2>
            {(searchTerm.length == 0) ? <Pokemonlist />: <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
        </>
    )
}

export default Pokedex