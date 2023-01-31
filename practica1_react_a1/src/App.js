import './App.css';

const Grupo = () => {
  return (
    <div>
      <h1>Grupo E</h1>
    </div>
  )
}

const Person = () => {
  return (
    <div>
      <h1>Guillem Jimenez</h1>
      <h1>Luis Castillo</h1>
      <h1>Raul Vaquerizo</h1>
    </div>
    );
};



const TextInfo = () => {
  return(
    <div>
      <input placeholder="Introdueix dades"></input>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Grupo />
      <br></br>
      <Person />
      <TextInfo />
      <br></br>
      <TextInfo />
      <br></br>
      <TextInfo />
      
    </div>
  );
}

export default App;
