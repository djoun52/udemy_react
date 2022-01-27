import { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

export default function Form(props) {
    
    const [dataArr, setDataArr] = useState([
        {txt: 'Promenner le chier', id: uuidv4()},
        {txt: 'travail', id: uuidv4()},
        {txt: 'jeux video', id: uuidv4()}
    ])
    const [stateInput, setStateInput] = useState()

    const deleteElement = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id
        })
        setDataArr(filteredState)
    }
    const linkInput = e=>{
        setStateInput(e)
    }
    const addTodo = e=>{
        e.preventDefault();
        const newArr = [...dataArr]
        const newTodo = {}
        newTodo.txt = stateInput
        newTodo.id = uuidv4()
        newArr.push(newTodo)
        setDataArr(newArr)

        setStateInput('')//vider le formulaire
    }

    return(
        <div className="m-auto px-4 col-12 col-sm-12 col-lg-6">
            <form onSubmit={e=> addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
                <input 
                value={stateInput}
                onInput={e => linkInput(e.target.value)}
                type="text" className="form-control" name="todo" id="todo" />
                <button className="mt-2 btn btn-primary d-block">validé</button>
            </form>
            <h2>liste des chose à faire</h2>
            <ul className="list-group">
                {dataArr.map((item)=>{
                    return(
                        <Item 
                        txt={item.txt} 
                        key={item.id} 
                        id={item.id} 
                        delFunc = {deleteElement} 
                        />
                    )
                })}

            </ul>
        </div>
    )
}