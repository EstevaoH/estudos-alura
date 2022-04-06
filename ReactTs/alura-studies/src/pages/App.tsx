import React, { useState } from 'react';
import { Cronometro } from '../components/Cronometro';
import Formulario from '../components/Formulario/index';
import Lista from '../components/Lista';
import { ITarefa } from '../Types/tarefa';
import style from './App.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecioTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
    })));
  }
  return (
    <div className={style.AppStyle}>
     <Formulario setTarefas={setTarefas}/>
     <Lista  
     tarefas={tarefas}
      selecionaTarefa={selecioTarefa}
     />
     <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
