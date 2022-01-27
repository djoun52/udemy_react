import React, { useState }  from 'react'
import "./Stati.css"
import Modal from '../Modal/ModalStat'

export default function Stati() {


    const [jour, setJour] = useState(120)
    const [rdvT, setRdvT] = useState(340)
    const [rdvP, setRdvP] = useState(248)
    const [rdvNp, setRdvNp] = useState(92)
    const [rdvGl, setRdgGl] = useState(34)
    const [inputT, setInputT] = useState(0)
    const [inputNp, setInputNp] = useState(0)
    const [inputGl, setInputGl] = useState(0)
    const [messErreur, setMessErreur] = useState('')
    const [toggleErreur, setToggleErreur] = useState(false)
    const [rdvList, setRdvList] = useState([])
    const [idElem, setIdElem] = useState(0)
    const [pourcentage, setPourcentage] = useState({
        "PT": ((rdvP / rdvT) * 100).toFixed(2),
        "glnp": ((rdvGl / rdvNp) * 100).toFixed(2)
    })

    const addRdv = e=>{
        e.preventDefault();
        if (inputT === "" || isNaN(inputNp)  || isNaN(inputGl)  || isNaN(inputT)){
            setToggleErreur(true)
            setMessErreur("remplisser les champs")
            return 
        }
        if (inputNp < inputGl || inputT < inputGl || inputT < inputNp  ) {
            setToggleErreur(true)
            setMessErreur("champs mal remplie")
            return 
        }
        if (inputT < 0 || inputNp < 0 || inputGl < 0){
            setToggleErreur(true)
            setMessErreur("valeurs négatives")
            return 
        }
        setRdvT(rdvT + inputT);
        setRdvNp(rdvNp + inputNp);
        setRdgGl(rdvGl + inputGl)
        setRdvP(rdvP + (inputT - inputNp) )
        setJour(jour + 1)
        let newObject = {
            id: idElem,
            jour: jour + 1,
            totalj: inputT ,
            totalg: rdvT + inputT,
            present: inputT - inputNp,
            absent: inputNp,
            gl: inputGl
        }
        setPourcentage({
            "PT": ((rdvP / rdvT)*100).toFixed(2),
            "glnp": ((rdvGl / rdvNp)*100).toFixed(2)
        })
        setIdElem(idElem + 1)
        let newrdvList = [...rdvList]
        newrdvList.push(newObject)
        setRdvList(newrdvList)
        setInputT("")
        setInputNp(0)
        setInputGl(0)
        
        document.getElementById("rdvt").focus()
        setToggleErreur(false)
    }

    const linkInputT = e => {
        setInputT(parseInt(e))
    }
    const linkInputNp = e => {
        setInputNp(parseInt(e))
    }
    const linkInputGl = e => {
        setInputGl(parseInt(e))
    }
    const videListe = ()=>{
        setRdvList([])
    }

    const deleteFunc = id => {
        let newList = [...rdvList];
        console.log(id)
        console.log(newList)
        console.log(newList[id])
        console.log(newList[id].totalj)
        let newpresent = inputT - inputNp
        setRdvT(rdvT - (rdvList[id].totalj - inputT))
        setRdvP(rdvP - (rdvList[id].present - newpresent))
        setRdvNp(rdvNp - (rdvList[id].absent - inputNp))
        setRdgGl(rdvGl - (rdvList[id].gl - inputGl))
        newList[id].totalj = inputT;
        newList[id].present = inputT - inputNp;
        newList[id].absent = inputNp;
        newList[id].gl = inputGl;
        setRdvList(newList)
        setPourcentage({
            "PT": ((rdvP / rdvT) * 100).toFixed(2),
            "glnp": ((rdvGl / rdvNp) * 100).toFixed(2)
        })
        setInputT("")
        setInputNp(0)
        setInputGl(0)

        document.getElementById("rdvt").focus()
    }

    return (
        <div>
            <h1>State pôle emploi</h1>
            <Modal />
            <form onSubmit={e=> addRdv(e)}>
                <div className="form-row">
                    <div className="col-md-6">
                        <label htmlFor="rdvt"> Rdv total</label>
                        <input className="form-control"  type="number" name="rdvt" id="rdvt" value={inputT} onInput={e => linkInputT(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="rdvt"> Rdv non présent</label>
                        <input className="form-control" type="number" name="rdvnp" id="rdvnp" value={inputNp} onInput={e => linkInputNp(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="rdvt"> Rdv non présent GL2</label>
                        <input className="form-control" type="number" name="rdvgl" id="rdvgl" value={inputGl} onInput={e => linkInputGl(e.target.value)} />
                    </div>
                </div>
                
                <button className="btn btn-primary mt-3"  type="submit">validé</button>
            </form>
            <section className="mt-4" >
                <div className="d-flex flex-row">
                    <div>
                        <p>Nombre de rdv totaux : {rdvT}</p>
                        <p>Nombre de rdv présent : {rdvP}</p>
                        <p>Nombre de rdv absent : {rdvNp}</p>
                        <p>Nombre de rdv absent avec GL2 : {rdvGl}</p>
                        <p>Nombre de feuille traité : {jour}</p>
                    </div>
                    <div>
                        <p>pourcentage de personne présente : {pourcentage.PT } </p>
                        <p>pourcentage de de gl2 sur absent : {pourcentage.glnp}</p>
                    </div>
                </div>
            </section>
            {toggleErreur && messErreur}

            <button onClick={videListe} className="btn btn-danger">vider la liste</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">total journée</th>
                        <th scope="col">absent</th>
                        <th scope="col">gl2</th>
                        <th scope="col">présent</th>
                        <th scope="col">total progrésif</th>
                        <th scope="col">btn</th>
                    </tr>
                </thead>
                <tbody>
                    {rdvList.map((rdv,index) =>(
                        <tr>
                            <td>{rdv.jour}</td>
                            <td>{rdv.totalj}</td>
                            <td>{rdv.absent}</td>
                            <td>{rdv.gl}</td>
                            <td>{rdv.present}</td>
                            <td>{rdv.totalg}</td>
                            <td> <button className="btn btn-warning" onClick={() => deleteFunc(index)} >modif</button>  </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}
