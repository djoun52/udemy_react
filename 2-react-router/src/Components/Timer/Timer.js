import React from 'react'
import { useState , useEffect } from "react";

export default function Timer() {
    const [state, setstate] = useState(false)
    const [errorState, seterrorState] = useState(false)
    const [errorMess, seterrorMess] = useState("")
    const [timer, setTimer] = useState(0)
    const [timerMin, setTimerMin] = useState()
    const [timerH, setTimerH] = useState()
    const [inputH, setInputH] = useState()
    const [inputmin, setInputmin] = useState()
    const [inputsec, setInputsec] = useState()



    const linkInputH = e=>{
        setInputH(e)
    }
    const linkInputMin = e=>{
        setInputmin(e)
    }
    const linkInputSec = e=>{
        setInputsec(e)
    }


    const addchrono = e=>{
        e.preventDefault();
        
        let newH = inputH
        let newMin = inputmin
        let newSec = inputsec
        if (newH < 0 || newMin < 0 || newSec < 0){
            seterrorState(true)
            seterrorMess(<p>erreur valeur négative</p>)
            return(console.log("erreur negatif input"))
        }
        if (newMin > 60 || newSec > 60){
            seterrorState(true)
            seterrorMess(<p>erreur valeur trop grande</p>)
            return(console.log("erreur max input"))
        }
        seterrorState(false)
        if (inputH === ''){
            newH = 0
        }
        if (inputmin === ''){
            newMin = 0
        }
        if (inputsec === ''){
            newSec = 0
        }
        if (isNaN(inputH)){
            newH = 0
        }
        if (isNaN(inputmin)){
            newMin = 0
        }
        if (isNaN(inputsec)){
            newSec = 0
        }
        setTimerH(newH)
        setTimerMin(newMin)
        setTimer(newSec)
        setstate(true)
        setInputH('')//vider le formulaire
        setInputmin('')//vider le formulaire
        setInputsec('')//vider le formulaire
    }

    useEffect(() => {
        const intervalID = setInterval(()=>{
            setTimer(timer => timer - 1);
            
        },500)
        return ()=>{
            clearInterval(intervalID)
            }
    }, [])

    useEffect(() => {
        if (timerH <= 0 && timerMin <= 0 && timer <= 0) {
            setstate(false)
        }else if(timerMin <= 0 && timer <= 0){
            setTimerH(timerH - 1)
            setTimerMin(59)
            setTimer(60)
        }else if (timer <= 0){
            setTimerMin(timerMin - 1)
            setTimer(60)
        }
    }, [timer])
    
    return (
        <>
            <form onSubmit={e=> addchrono(e)}>
                <div className="form-row ">
                    <div class="col-md-2">
                        <input type="number" className="form-control " name="heure" id="heure" placeholder="heures" value={inputH} onInput={e => linkInputH(e.target.value)}/>
                    </div>
                    <div class="col-md-2">
                        <input type="number" className="form-control" name="minute" id="minute" placeholder="minutes"  value={inputmin} onInput={e => linkInputMin(e.target.value)} />
                    </div>
                    <div class="col-md-2">
                        <input type="number" className="form-control" name="seconde" id="seconde" placeholder="secondes" value={inputsec}  onInput={e => linkInputSec(e.target.value)}/>
                    </div>
                    <div class="col">
                        <input type="submit" class="btn btn-primary" value="lancé le chrono" />
                    </div>
                </div>
            </form>
            {errorState && errorMess}
            {state ? <h2 className="mx-auto text-center">{timerH} : {timerMin} : {timer} </h2> : <h3 className="mx-auto text-center">Fini</h3> }
            
        </>
    );
}


