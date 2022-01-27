import {useState, useEffect} from "react";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";

function Hello() {
  function byFn() {
    console.log("bye");
  }
  function hiFn() {
    console.log("create");
    return byFn;
  }
  useEffect(() =>{
    hiFn}, []);
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  onClick = () => setShowing((prev) => !prev);
  return (
  <div>
    {showing ? <Hello /> : null}
    <button onClick={onclick}>{showing ? "Hide":"Show"}</button>
  
  </div>
  );
}


export default App;
