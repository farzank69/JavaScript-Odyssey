import './App.css';
import { User } from "./Person.tsx";

function App() {

  // const fetchUser = () => ({name: "Farzan", age: 23, isMarried: null});
  // const userFetched = fetchUser();
  return ( 
    <>
    <User name={"Farzan"} age={23} isMarried={false}/>{" "}
     {/* name={userFetched.name} 
     age={userFetched.age} 
     isMarried={userFetched.isMarried}/>{" "}       */}
    {/* this will give an error as the above field is getting the null value but in the field will only accept boolean as per type */}
    <User name={"Arthur"} age={27} isMarried={true}/>{" "}
    </>
  );
}

export default App
