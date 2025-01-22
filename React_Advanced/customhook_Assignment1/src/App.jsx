import "./App.css";
import { Counter } from "./components/Counter";
import LocalStroage from "./components/LocalStroage";
import LoggerComponent from "./components/LoggerComponent";
import ToggleSwitch from "./components/ToggleSwitch";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <Counter />
      <ToggleSwitch/>
      <UserList/>
      <LoggerComponent/>
      <LocalStroage/>
    </>
  );
}

export default App;
