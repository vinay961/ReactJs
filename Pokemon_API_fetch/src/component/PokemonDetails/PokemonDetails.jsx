import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import './PokemonDetails.css'

function PokemonDetails()  {
    const {id} = useParams()
    // console.log(id);
    const [res,setRes] = useState({})
    async function pokemonDetails(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        // console.log(response);
        setRes({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t)=>t.type.name)
        })

    }

    useEffect(()=>{
        pokemonDetails();
    },[])
    return (
        <>
            <div className="pokemon-details-wrapper">
                <div className="pokemon-name">{res.name}</div>
                <img src={res.image} alt="" />
                <div className="pokemon-height">Height: {res.height}</div>
                <div className="pokemon-weight">Weight: {res.weight}</div>
                <div className="pokemon-type">
                    Type: {res.types && res.types.map((t)=> <div>{t}</div>) }
                </div>
            </div>
        </>
    )
}

export default PokemonDetails