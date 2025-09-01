import logo from "./logo.svg";
// import "./App.css";
import State from "./Component/State";
import FormValidation from "./Component/FormValidation";
import { Route, Routes } from "react-router-dom";
import StateHook from "./hooks/useState/StateHook";
import Red from "./hooks/useReducer/Red";
import Ref from "./hooks/useRef/Ref";
import Effect from "./hooks/useEffect/Effect";
import Parent from "./hooks/useContext/Parent";
import Memoooo from "./hooks/useMemo/Memoooo";
import One from "./hooks/useCallBack/One";
import Create from "./CRUD/Create";
import Read from "./CRUD/Read";
import Update from "./CRUD/Update";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
        {/* <Route path="/" element={<StateHook />} />
        <Route path="/red" element={<Red />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/context" element={<Parent />} />
        <Route path="/memo" element={<Memoooo />} />
        <Route path="/callback" element={<One />} /> */}
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
