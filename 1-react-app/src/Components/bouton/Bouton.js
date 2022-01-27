import "./Bouton.css"
import { useState } from "react";

function Bouton(props){
    const [nb, setnb] = useState(3)
    return (
        <div>
            <button onClick={()=> props.func(nb)}> change state</button>
            
        </div>
    )
}

export default Bouton;