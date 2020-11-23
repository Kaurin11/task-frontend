import React from 'react';
import { getUserIdFromStorage } from '../../constants/localstorage';


import './stylee.scss';

const Task = ({title, hours}) => {

    const userId = getUserIdFromStorage();

    return (

        <div className="tasks">
                <div className="tasks__heading">
                    <h1 className="tasks__heading-task">Task</h1> 
                    <h1 className="tasks__heading-hours">Hours</h1>
                </div>
            <div>
                <div>
                    <h3 className="tasks__body-task">{title}</h3>
                    <h3 className="tasks__body-hours">{hours}</h3>
                </div>
            </div>
        </div>)
       
}

export default Task;