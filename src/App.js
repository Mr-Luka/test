import logo from './logo.svg';
import './App.css';
import {digimon} from "./index.js";

function App() {
  const digimonMessages = digimon();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {digimonMessages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
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
