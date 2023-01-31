import './App.css';

const Grupo = (props) => {
  return (
    <div>
      <h1>Grupo {props.grupo}</h1>
    </div>
  )
}

const Person = (props) => {
  return (
    <div>
      <h1>{props.name} {props.surname} {props.age}</h1>
    </div>
    );
};



const TextInfo = (props) => {
  return(
    <div>
      <input placeholder={props.holder}></input>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Grupo grupo="E"/>
      <br></br>
      <Person name="Guillem" surname="Jimenez" age={21}/>
      <Person name="Luis" surname="Castillo" age={20}/>
      <Person name="Raul" surname="Vaquerizo" age={19}/>

      <TextInfo holder="Introduzca con props"/>
      <br></br>
      <TextInfo holder="Introduzca con props2"/>
      <br></br>
      <TextInfo holder="Introduzca con props3"/>

      
    </div>
  );
}

export default App;
