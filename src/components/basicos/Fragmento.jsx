import { react } from '@babel/types'
import React from 'react'

export default function Fragmento(props) {
    return (
        <React.Fragment key="1">
            <h1>fragmento</h1>
            <h2>Cuidado com esse componente</h2>
        </React.Fragment>
    )
}