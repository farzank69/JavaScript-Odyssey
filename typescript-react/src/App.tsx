import './App.css';
import { Person } from "./Person.tsx";

function App() {

  // const fetchUser = () => ({name: "Farzan", age: 23, isMarried: null});
  // const userFetched = fetchUser();
  return ( 
    <>
    <Person name={"Farzan"} age={23} isMarried={false}/>{" "}
     {/* name={userFetched.name} 
     age={userFetched.age} 
     isMarried={userFetched.isMarried}/>{" "}       */}
    {/* this will give an error as the above field is getting the null value but in the field will only accept boolean as per type */}
    <Person name={"Arthur"} age={27} isMarried={true}/>{" "}
    </>
  );
}

export default App
