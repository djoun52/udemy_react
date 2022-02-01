import React, {useState, useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { getCatImg } from '../../redux/reducers/dataImgReducer';
export default function Counter() {
    
    const [cartData, setCartData] = useState(0);
    const {cart, count, imgURL} = useSelector(state =>({
        ...state.addCartReducer,
        ...state.counterReducer, 
        ...state.dataImgReducer
    }))
    // const cart = useSelector(state => state.cart)

    const dispatch = useDispatch()

    // const incrFunc = () =>{
    //     dispatch({ 
    //         type : "INCR"
    //     })
    // }
    // const decrFunc = () =>{
    //     dispatch({ 
    //         type : "DECR"
    //     })
    // }

    const addToCartFunc= () => {
        dispatch({ 
            type: "ADDCART", 
            payload: cartData
        })
    }


    useEffect(() => {
        dispatch(getCatImg())
    

    }, []);

    return (
        <div>
            <h1>Mon panier : {cart}</h1> 
            {/* <button onClick={decrFunc}>-1</button>
            <button onClick={incrFunc}>+1</button> */}
            <input
            value={cartData}
            onInput={e => setCartData(e.target.value)}
            type="number" />
            <br />
            <button onClick={addToCartFunc}>Ajouter au panier</button>

            <br />
            {imgURL && <img style={{width: '300px'}} src={imgURL}/>}
        </div>  
    )

}
