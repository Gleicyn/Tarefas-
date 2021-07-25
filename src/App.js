import React, { Component } from "react";
import Body from "./components/Body";
import Head from "./components/Head";
import Foot from "./components/Foot"
import "./index.css"




class App extends Component {
  state ={
     tarefas:[]
  }
  componentDidMount(){
    fetch("/api/tarefas.json")
      .then(response=>response.json())
      .then(tarefas => this.setState({tarefas}))
      .catch(function(error){
        console.log("Erro na requisição")
      })
      .finally(function(){
        console.log("Sempre retorna")
      })
  }
  handleRemoverLinha = (id) => {
    const livros = this.state.tarefas.filter((l)=> l.id !==id)
    this.setState({livros})
    console.log({livros})
  }
  render(){
   return (
      <table className="tabela">
     <Head/>
     <Body tarefas={this.state.tarefas} removerLinha={this.handleRemoverLinha}/>
     <Foot qdeTarefas ={this.state.tarefas.length}/>
    </table>
  );
}
}

export default App;
