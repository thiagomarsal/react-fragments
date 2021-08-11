import React from 'react'

export default props => {
    const isPar = props.numero % 2 === 0
    return(
        <div>
            <span>{props.numero} é um número {isPar ? 'Par' : 'Impar'}</span>
        </div>
    )
}