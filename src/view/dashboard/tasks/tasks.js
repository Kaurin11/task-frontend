import React, {useState, useEffect} from 'react' ;
import Task from '../../../components/task/task';
import { getUserIdFromStorage } from '../../../constants/localstorage';
import { getAllTask } from '../../../constants/services/services';
import './stylee.scss';

import {connect} from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import { useHistory } from 'react-router';
import { getAuthUrl } from '../../../constants/routes/routes';
import LogoutButton from '../../../components/button/logoutBotton';

const Tasks = ({getTaskStore,tasksStore,idUserStore}) => {

    const history = useHistory();
    const [tasks, setTask] = useState([]);

    const userId = getUserIdFromStorage();
    useEffect(() => {
        // const getData = async () => {
        //     const userId = getUserIdFromStorage();
        //     const {data} = await getAllTask(userId);
        //     const allTask = data;
        //     console.log(allTask)
        //     setTask(allTask);
        //     //props.getTaskStore(allTask);
        // }
        // getData()
        
            getTaskStore();

    }, []);

    
    // console.log(userId)
   
    // const idOfUser = localStorage.getItem('userId');


    const totalHours = tasksStore.reduce((acc, curr) => {
        if(curr.hours > 0){
            acc += curr.hours
        }
        return acc
    }, 0);
    

    const logoutHandler = (e)=> {
        e.preventDefault();
        localStorage.clear();
        history.push(getAuthUrl())

    }
   
    return (
        <div>
            <div className="tasks-reviews">
                <div className="tasks__logout btn--animated" onClick={logoutHandler}>
                    <ion-icon size="large" name="log-out-outline"></ion-icon>
                </div>
                        {tasksStore.map((task) => {
                            return(
                                <Task
                                    key={task.id}
                                    title={task.title}
                                    hours={task.hours}
                                    id={task.id}/>  
                            )
                        })}
                <h2>
                    Total hours: {totalHours} h
                </h2>
            </div>
        </div>
    )
}




const mapStateToProps = (state) => {
    return {
        tasksStore: state.reducer.tasks,
        idUserStore: state.reducer.idUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getTaskStore : (tasks) => dispatch(actionCreators.getTask(tasks))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);