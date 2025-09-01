import logo from "./logo.svg";
// import "./App.css";
import State from "./Component/State";
import FormValidation from "./Component/FormValidation";
import { Route, Routes } from "react-router-dom";
import StateHook from "./hooks/useState/StateHook";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StateHook />} />
      </Routes>
      {/* <State /> */}
      {/* <FormValidation /> */}

      {/* <header className="App-header">
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
          Welcome to the reactjs
        </a>
      </header> */}
    </div>
  );
}

export default App;
