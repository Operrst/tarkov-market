import logo from "./logo.svg";
import "./App.css";
import MarketView from "./components/MarketView/index.jsx";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <MarketView/>
        </div>
      </header>
    </div>
  );
}

export default App;
