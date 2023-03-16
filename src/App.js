import React, {Component} from "react";
//A classe App erda os metodos da classe Component
class App extends Component{

  //Para criar estados temos que criar um método construtor 
  constructor(props){
    //O método super executa as props dentro do Component 
    super(props);
    //Executa o estado do objeto por meio do state, e para fazer isso sempre se usa o termo state, não fuja desta sintaxe 
    this.state = {
      titulo: "Primeira página com Class Component"
    } 

    //O metodo [] avisa o construto que um determinado atributo esta sujeito a alteração pelo metodo setState, que neste caso é o titulo. 
    this.mudar = this.mudar.bind(this);
  }

  //Este método muda o titulo
  mudar(){
    let novoTitulo = "Aprendi a utulizar Class Component"
    //O setState é um metodo do Component que modifica a variavel do state.
    this.setState({titulo:novoTitulo});
  }

  //O render é um método obrigatorio em classe, pois ele carrega os objetos na página, por meio do return
  render(){
    return(
      //Note que para acessar o titulo de estate, segue o conseito de orientação a objeto 
      <div>
        <h1> {this.state.titulo} </h1>
        <button onClick={this.mudar}>Mudar Título</button>
      </div>
    );
  }

}

export default App;