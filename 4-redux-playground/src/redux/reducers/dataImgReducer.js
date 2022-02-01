const INITIAL_STATE = {
    umgURL: ""
}

function dataImgReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'LOADIMG': {
            return {
                ...state,
                imgURL: action.payload
            }
        }
    }

    return state
}

export default dataImgReducer;

export const getCatImg = () => dispacht => {

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data=>{
        dispacht({
            type: 'LOADIMG',
            payload: data[0].url
        })
    })
}