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
// Question arises is that why we return react icons in jsx format, by doing this we essentially instructing react to render these components when the icon component is used.
