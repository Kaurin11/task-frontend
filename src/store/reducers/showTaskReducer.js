import * as actionTypes from '../actions/actionTypes';

const initialState = {
    showTask: false
}

const showTaskReducer = ( state = initialState, action) => {
    switch(action.type) {

        case actionTypes.SHOW_TASK : 
            return{
                ...state,
                showTask: true
            }
        case actionTypes.HIDE_TASK : 
            return{
                ...state,
                showTask: false
            }
        }
        return state;
    }

export default showTaskReducer;