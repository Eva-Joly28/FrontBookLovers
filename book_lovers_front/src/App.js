import './App.css';
import Header from "./components/Header";

function App() {
  return (

      <div className="App">
        <header className="App-header">
          <p>
            Bienvenue sur mon application React !
          </p>
          <a
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
          >

          </a>
            <Header/>
        </header>
      </div>

  );
}

export default App;
