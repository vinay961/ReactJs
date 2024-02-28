// import { useState} from "react";
import {FaRegCircle,FaTimes,FaPen} from 'react-icons/fa'
function Icon({name}){
    // const [icon,setIcon] = useState([]);
    if(name == 'circle'){
        return <FaRegCircle />
    }
    else if(name == 'cross'){
        return <FaTimes/>
    }
    else{
        return <FaPen />
    }
}

export default Icon;
