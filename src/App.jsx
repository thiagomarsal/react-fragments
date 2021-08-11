import React from 'react'
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListAlunos from './components/repeticao/ListAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/input'
import Contador from './components/contador/Contador'
import MegaSena from './components/megasena/MegaSena'

export default () => (
        <div className="App">
            <h1>Fragmentos React</h1>
            <div className="Cards">
                <Card titulo="13 - Mega-Sena" color="#900C3F">
                    <MegaSena qtd={6} />
                </Card>

                <Card titulo="12 - Contador" color="#660099">
                    <Contador numeroInicial={10} />
                </Card>

                <Card titulo="11 - Componente Controlado (Input)" color="#FF6666">
                    <Input />
                </Card>

                <Card titulo="10 - Comunicação Indireta" color="#FF99CC">
                    <IndiretaPai />
                </Card>

                <Card titulo="09 - Comunicação Direta" color="#CCFF66">
                    <DiretaPai />
                </Card>

                <Card titulo="08 - Renderização Condicional" color="#2E4053">
                    <ParOuImpar numero={21} />
                    <UsuarioInfo usuario={{nome: 'Fernando'}}/>
                    <UsuarioInfo usuario={{email: '2@2.com'}}/>
                    <UsuarioInfo usuario={{}}/>
                </Card>

                <Card titulo="07 - Desafio Repetição" color="#979A9A">
                    <TabelaProdutos />
                </Card>

                <Card titulo="06 - Repetição" color="#F4D03F">
                    <ListAlunos />
                </Card>

                <Card titulo="05 - Componente com Filhos" color="#229954">
                    <Familia sobreNome="Silva">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="José" />
                        <FamiliaMembro nome="João" />
                    </Familia>
                </Card>

                <Card titulo="04 - Desafio Aleatorio" color="#E6B0AA">
                    <Aleatorio min={1} max={100}/>
                </Card>

                <Card titulo="03 - Fragmento" color="#AF7AC5">
                    <Fragmento />
                </Card>

                <Card titulo="02 - Fragmento" color="#A9CCE3">
                    <ComParametro
                        titulo="Segundo Componente"
                        aluno="Thiago"
                        nota={9.3} />
                </Card>

                <Card titulo="#01 - Fragmento" color="#48C9B0">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )