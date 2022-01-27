import { useState } from "react";
import Item from './Components/item/Item'
import Bouton from './Components/bouton/Bouton'

function App() {
  // console.log(useState(10))
  
  
  let  [monState , setMonState] = useState(10)
  const modifyState = (nb)=>{
    setMonState(monState + nb)
    setinputData(monState + nb)
  }
  const [inputData, setinputData] = useState()
  const changeInput = (e)=>{
    setinputData(e)
  }

  const [toggle, settoggle] = useState(false)
  const changetoggle = ()=> {
    settoggle(!toggle)
  }
  let toggleContenue
  if(toggle){
    toggleContenue = <h1> le toggle est true </h1>
  }else{
    toggleContenue = <h1> le toggle est false </h1>
  }

  return (
    <div id="wrapper">
      <div className="App">
        <h1>Hello state : {monState}</h1>
        <Bouton  func={modifyState}/>
        <Item />

        <input type="text" name="testInput" id="testInput" value={inputData} onInput={e => changeInput(e.target.value)} />
        <br/>
        {toggleContenue}
        <button onClick={changetoggle} >change toggle</button>
        <div className={toggle ? "box animated" : "box"}></div>
        
      </div>
    </div>

  );
}

export default App;
