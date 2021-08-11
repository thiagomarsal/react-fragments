import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return(
        <div>
            <DiretaFilho nome="Junior" idade ={20} isHabilitado={true} />
            <DiretaFilho nome="Gabriel" idade ={37} isHabilitado={false} />
        </div>
    )
}