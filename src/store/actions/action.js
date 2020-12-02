import {
  getAllTask,
  getTaskByDate,
  setTask,
} from "../../constants/services/services";
import * as actionTypes from "./actionTypes";

export const getTaskForDate = () => {
  return async function(dispatch, taskDate) {
    let idOfUser = localStorage.getItem("userId");
    const { data } = await getTaskByDate(idOfUser, taskDate);
    dispatch({
      type: actionTypes.GET_TASK_DATE,
      tasks: data,
    });
  };
};

export const getTask = () => async (dispatch) => {
  let idOfUser = localStorage.getItem("userId");
  const { data } = await getAllTask(idOfUser);
  const tasks = data;
  dispatch({
    type: actionTypes.GET_TASK,
    tasks: tasks,
  });
};

export const purchaseTask = (taskObj) => {
  let idOfUser = localStorage.getItem("userId");
  return (dispatch) => {
    setTask(idOfUser, taskObj)
      .then((response) => {
        console.log(response);
        dispatch({
          type: actionTypes.ADD_TASK,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error.response.data.message);
        dispatch({
          type: actionTypes.PURCHASE_TASK_FAIL,
          error: error.response.data.message,
        });
      });
  };
};

export const setShowTask = (showTask) => {
  return {
    type: actionTypes.SHOW_TASK,
    showTask,
  };
};

export const setHideTask = (showTask) => {
  return {
    type: actionTypes.HIDE_TASK,
    showTask,
  };
};
