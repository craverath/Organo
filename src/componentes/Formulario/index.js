import './Formulario.css'
import CampoTexto from '../CompoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

   /*  const times=[
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'Mobile',
        'Inovação'
    ]
 */
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, cargo, imagem, time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>
                    Preencha os dados para criar o card do colaborador
                </h2>
                <CampoTexto obrigatorio={true}
                 label="Nome" 
                 placeholder="Digite seu nome" 
                value={nome}
                 aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto obrigatorio={true}
                 label="Cargo"
                  placeholder="Digite seu cargo"
                value={cargo} 
                aoAlterado={valor => setCargo(valor)} 
                />
                <CampoTexto obrigatorio={true} 
                label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                value={imagem}
                 aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa obrigatorio={true}
                 label='Time' 
                 itens={props.nome}            
                value={time} 
                aoAlterado={valor => setTime(valor)}
                />
                <Botao texto="Criar Card" />
            </form>
        </section>
    )
}
export default Formulario