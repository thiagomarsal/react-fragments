import React from 'react'

export default function ComParametro(propos) {
    return (
        <div>
            <h2>{ propos.titulo }</h2>
            <h3>{ propos.aluno }</h3>
            <h4>{ propos.nota }</h4>
        </div>
    )
}