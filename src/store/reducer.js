import * as actionTypes from './action';

const initialState = {
    tasks : null,
    date: new Date()
}

const reducer = ( state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TASK :
            return{
                ...state,
                tasks: state.tasks.concat(state.tasks)
            }
        }
        return state;
}

export default reducer;