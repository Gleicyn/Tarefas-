import React from 'react'

const Body =(props) =>(

  <tbody>
    {props.tarefas.map((tarefa, index)=>(

    <tr key ={tarefa.id}>
      <td>{tarefa.id}</td>
      <td>{tarefa.titulo}</td>
      <td>{tarefa.autor}</td>
      <td>
        <button onClick={ ( ) => props.removerLinha(tarefa.id) } id={tarefa.id} className="remover">Remover</button>
      </td>
    </tr>
    ))
    }
  </tbody>
)
    
export default Body