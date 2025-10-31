import './App.css';
import { Person } from "./Person.tsx";

function App() {
  return (
    <>
    <Person name={"Farzan"} age={23} isMarried={false}/>{" "}
    <Person name={"Arthur"} age={27} isMarried={true}/>{" "}
    </>
  );
}

export default App
