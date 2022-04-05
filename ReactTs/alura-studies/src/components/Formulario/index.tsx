import React from "react";
import { ITarefa } from "../../Types/tarefa";
import Botao from "../Botao";
import style from  "./Formulario.module.scss";
import {v4 as uuidv4} from "uuid";

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>{
    state ={
        tarefa: "",
        tempo: "00:00",
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
        this.props.setTarefas(tarefasAntigas => 
            [
             ...tarefasAntigas,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4(),
                }
            ]
        );
    }
    render(){
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                    value={this.state.tarefa}
                    onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required
                    />
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                    value={this.state.tempo}
                    onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                    type="time"
                    step="1"
                    id="tempo"
                    name="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
                </div>
                <Botao type="submit">
                    Adicinar
                </Botao>
            </form>
        )
    }

}

export default Formulario;