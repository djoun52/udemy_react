import { useState , useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import useDimension from './hook/useDimension'

function App() {
  const browserWidth = useDimension()

  return (
    <div id="wrapper">
      <h1>app</h1>
        
    </div>

  );
}

export default App;
