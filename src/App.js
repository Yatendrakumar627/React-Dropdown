import "./App.css";
import Dropdown from "./components/Dropdown";
import { data } from "./data/data";

function App() {
  return (
    <div className="App">
      <h1>Dropdown</h1>
      <Dropdown options={data}/>
    </div>
  );
}

export default App;
