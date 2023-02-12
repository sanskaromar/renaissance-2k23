import "./App.css";
import About from "./components/About/About";
import Events from "./components/Events/Events";

function App() {
  return (
    <div className="App">
      <About />
      <Events />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code className="underline">src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
