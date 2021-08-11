import React, {useState} from 'react'
import './MegaSena.css'

export default props => {
    function gerarNumeros(qtd) {
        const numeros = Array(qtd).fill(0).reduce((nums) => {
            const novoNumero = gerarNumeroUnico(1, 60, nums)
            return [...nums, novoNumero]
        }, [])
        .sort((n1,n2) => n1-n2)
        return numeros
    }
    
    function gerarNumeroUnico(min, max, array) {
        const valor = parseInt(Math.random() * (max - min)) + min
        return array.includes(valor) ? gerarNumeroUnico(min, max, array) : valor
    }

    const [qtd, setQtd] = useState(props.qtd || 6)
    const numerosIniciais = gerarNumeros(qtd)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return(
        <div className="MegaSena">
            <h2>Mega-Sena</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="">Qtd de Números</label>
                <input min="6" max="15" type="number" value={qtd} onChange={(e) => {
                    setQtd(+e.target.value)
                    setNumeros(gerarNumeros(+e.target.value))
                }}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtd))}>Gerar Números</button>
        </div>
    )
}