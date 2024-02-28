import Icon from '../Icon/Icon.jsx'
import './Card.css'

function Card({player,onPlay,index}){
    let icon = <Icon />  // Default icon if player is neither 'X' nor 'O'
    if(player == 'X'){
        icon = <Icon name='cross'/>  // if player icon is 'X' then set the icon to cross

    }
    else if(player == 'O'){
        icon = <Icon name='circle' /> // if player icon is 'Y' then set the icon to circle
    }
    return(
        <div className="card" onClick={() => {return onPlay(index)}}>
            {icon}
        </div>
        //Render the determined icon component
    )
}

export default Card