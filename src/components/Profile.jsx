import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function ConditionalRender(props) {
    if (props.hasUser) {
        return (
            <div>
                <FontAwesomeIcon
                    className='fa-5x'
                    icon={faUser}
                    color="#FFF"
                    id="userIcon" />
                <p>{props.hasUser.nome}<br />{props.hasUser.dataObito}</p>
                <p>{props.hasUser.cemiterio}</p>
                <p>{props.hasUser.quadra}, {props.hasUser.rua}</p>
                <p>{props.hasUser.numero}</p>
                <FontAwesomeIcon 
                    className='fa-2x mapsLink'
                    icon={faLocationDot}
                    onClick={()=>{
                        const adress = 'https://www.google.com/maps/search/' + props.hasUser.cemiterio
                        window.open(adress, '_blank')
                    }}
                />
            </div>
        )
    }
    return (
        <p>
            Não achou perfil
        </p>
    )
}

export default ConditionalRender;