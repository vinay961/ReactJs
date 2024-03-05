import { useState,useEffect } from 'react'
import {debounce} from 'lodash'
import './Search.css'
function Search(props) {

    const handleInput = debounce((e)=>{
        const query = e.target.value;
        props.updateSearchTerm(query)
    },2000)

    return(

        <div className="search">
            <input className="InputField"  type="text" placeholder="Pokemon name ..." onChange={handleInput}/>
            
        </div>
    )
}

export default Search