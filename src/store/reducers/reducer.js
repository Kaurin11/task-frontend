import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tasks : [],
    date: null,
    error: ''
    
}

const reducer = ( state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_TASK :
            return{
                ...state,
                tasks: action.tasks
            }

        case actionTypes.PURCHASE_TASK_FAIL :
            return{
                ...state,
                error: action.error
            }

        case actionTypes.ADD_TASK :
            const newTask = state.tasks.concat(action.payload)
            return{
                ...state,
                newTask
            }


        // case actionTypes.PURCHASE_TASK_SUCCESS:
        //     const newTask = {
        //         ...action.taskData,
        //         id: action.id
        //     }
        //     return{
        //         ...state,
        //         tasks: state.tasks.concat(newTask)
        //     }
        }
        
        return state;
}

export default reducer;