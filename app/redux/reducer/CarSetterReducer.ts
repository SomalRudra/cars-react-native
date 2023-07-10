import Action from "../constants";

const intitalState =   {
    car: {}
}


export const carSetterReducer = (state = intitalState, action) => {
    switch(action.type) {
        case Action.SET_CAR: 
            return {
                ...state,
                car: action.payload
            };
        default: 
            return state

    }
}