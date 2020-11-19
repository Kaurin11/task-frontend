import { getUserIdFromStorage } from '../../constants/localstorage';
import { USER_ID_KEY } from '../../constants/routes/routes';
import { getAllTask, setTask } from '../../constants/services/services';
import * as actionTypes from './actionTypes';


const userId = getUserIdFromStorage();

export const setShowTask = (showTask) => {
    return {
        type: actionTypes.SHOW_TASK,
        showTask
    }
}

export const setHideTask = (showTask) => {
    return {
        type: actionTypes.HIDE_TASK,
        showTask
    }
}

export const getTask = () => async (dispatch) => {
    const {data} = await getAllTask(userId);
    const tasks = data ;
    dispatch({
        type: actionTypes.GET_TASK,
        tasks: tasks
    })
}


export const purchaseTask = (taskObj) => {
    return  dispatch =>  {
        setTask(userId,taskObj)
        .then(response => {
            console.log(response);
            dispatch(
                {
                    type: actionTypes.ADD_TASK,
                    payload : response.data
                }
            )
        })
        .catch(error => {
            console.log(error.response.data.message)
            dispatch(
                {
                    type: actionTypes.PURCHASE_TASK_FAIL,
                    error : error.response.data.message
                }
            )
        })
        // try{
        //     await setTask(idOfUser, values)
        //     dispatch(purchaseTaskSuccess()) 
        // } catch(error) {
        //     purchaseTaskFail(error)
        // }
        // const submitHandler = async (e) => {
        //     e.preventDefault();
        //     try{
        //         await setTask(idOfUser ,formik.values);     
        //         setShowTask(false);   
        //     } catch (error) {
        //         setError(error.response.data.message)
        //       }
        //}
    }
}