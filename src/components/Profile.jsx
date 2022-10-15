import React from 'react'

function ConditionalRender(props) {
    if (props.hasUser) {
        return (
            <p>Achou perfil</p>
        )
    }
    return (
        <p>
            Não achou perfil
        </p>
    )
}

export default ConditionalRender;