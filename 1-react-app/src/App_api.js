import { useState , useEffect } from "react";
import Item from './Components/item/Item'
import Bouton from './Components/bouton/Bouton'

function App() {
  
  const [dataImg, setDataImg] = useState()

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response=>{
      console.log(response)
      return response.json()
    })
    .then(data =>{
      console.log(data)
      setDataImg(data[0].url)
    })
  }, [])

  return (
    <div id="wrapper">
      <div className="App">
        <h1 className="titre">api test</h1>
        {dataImg &&
        <img src={dataImg} 
        alt="cat image" 
        style={{width: "500px"}}
        />}
      </div>
    </div>

  );
}

export default App;
