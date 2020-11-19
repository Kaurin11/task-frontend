import React, { useEffect, useState } from 'react' ;
import Task from '../../../components/task/task';
import { getUserIdFromStorage } from '../../../constants/localstorage';
import { getAllTask } from '../../../constants/services/services';
import './stylee.scss';

import {connect} from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import Button from '../../../components/button/button';

const Tasks = ({getTaskStore,tasksStore}) => {

    //const [tasks, setTask] = useState([]);


    useEffect(() => {
        // const getData = async () => {
        //     const userId = getUserIdFromStorage();
        //     const {data} = await getAllTask(userId);
        //     const allTask = data;
        //     console.log(allTask)
        //     // setTask(allTask);
        //     props.getTaskStore(allTask);
        // }

        const getData = () => {
            getTaskStore()
        }
        getData()
    }, []);

   
    // const idOfUser = localStorage.getItem('userId');
    
    console.log(tasksStore)


    const totalHours = tasksStore.reduce((acc, curr) => {
        if(curr.hours > 0){
            acc += curr.hours
        }
        return acc
    }, 0);
    

   
    return (
        <div>
            <div className="tasks-reviews">
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
        tasksStore: state.reducer.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getTaskStore : (tasks) => dispatch(actionCreators.getTask(tasks))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);