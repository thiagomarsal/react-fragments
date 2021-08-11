import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [isHabilitado, setHabilitado] = useState(true)

    function fornecerInformacoes(nome, idade, isHabilitado) {
        setNome(nome)
        setIdade(idade)
        setHabilitado(isHabilitado)
    }
    return(
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade} </strong></span>
                <span>{isHabilitado ? 'Verdadeiro' : 'False'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}