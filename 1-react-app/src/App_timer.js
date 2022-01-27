import { useState , useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Components/Timer'
import Timer from "./Components/Timer";
function App() {

  const [toggle, setToggle] = useState(true)


  const toggleFunc = ()=> {
    setToggle(!toggle)
  }
  return (
    <div id="wrapper">
      <h1>timer exo</h1>
        <button className="btn btn-primary" onClick={toggleFunc}>Toggle</button>
        {toggle && <Timer/> }
        
    </div>

  );
}

export default App;
