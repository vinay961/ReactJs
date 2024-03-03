import { useEffect,useState } from "react"
import axios from 'axios'
import './PokemonList.css'
import { Link } from "react-router-dom"

function Pokemonlist() {
    const [isLoading , setLoading] = useState(true)
    const [data,setData] = useState([])
    const [setnext,setNext] = useState('')
    const [setprev,setPrev] = useState('')
    const [pokedexUrl,setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    
    async function pokemondownload(){
        const res = await axios.get(pokedexUrl);
        // console.log(res);
        const PokemonDetails = res.data.results;
        setNext(res.data.next)
        setPrev(res.data.previous)
        console.log(setnext);
        console.log(setprev);
        const img = PokemonDetails.map((p) => axios.get(p.url))
        const pokemonData = await axios.all(img);
        // console.log(pokemonData);

        const result = pokemonData.map((p)=>{
            const pokemon = p.data
            return {
                id:pokemon.id,
                name:pokemon.name,
                image:pokemon.sprites.other.dream_world.front_default,
                type:pokemon.type
            }
        })
        // console.log(result);
        setLoading(false)
        setData(result)
        setLoading(false)
    }
    useEffect(()=>{
        pokemondownload()
    },[pokedexUrl])


    return (
        <div className="PokemonHeader">

            <hr />

            <div>
                {(isLoading) ? "Loading...":""}
            </div>
            <div className="List">
                {data.map((item,index)=>{
                    return (
                        <div key={index} className="name"> 
                            <Link to={`/pokemon/${item.id}`}>
                                <div className="pokemon-name">{item.name}</div>
                                <div><img className="pokemon-image" src={item.image} alt={item.name} /></div>
                            </Link>
                        </div>
                    );
                })}
                <div className="b">
                    <button className="btn" disabled={setprev == null} onClick={()=>{return setPokedexUrl(setprev)}}>Previous</button>
                    <button className="btn" disabled={setnext == null} onClick={()=>{return setPokedexUrl(setnext)}}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Pokemonlist