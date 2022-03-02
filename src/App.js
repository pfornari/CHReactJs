import logo from './logo.svg';
import './App.css';
// import 'bpptstrap/dist/css/bootstrap.min.css';

function App() {
  const style = {backgroundColor: 'blue'}
  return (
    // <div className="App" style={ style } >
    //   soy App
    //   <img ></img>
    // </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;