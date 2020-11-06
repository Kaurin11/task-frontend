import React, { useEffect, useState } from 'react' ;
import {  getTaskByDate } from '../../../constants/services/services';
import TaskDate from '../../../components/taskDate/taskDate';
import { getMainUrl } from '../../../constants/routes/routes';
import { useRouteMatch, useHistory } from 'react-router-dom';
import Footer from '../../../components/footer/footer';
import { getUserIdFromStorage } from '../../../constants/localstorage';

const TaskForDate = () => {

    const history = useHistory();
    const match = useRouteMatch();
    const [tasks, setTask] = useState([]);
    // const userId = localStorage.getItem('userId');

    useEffect(() => {
        const getData = async () => {
        const userId = getUserIdFromStorage();
        const{date} = match.params;
        const{data} = await getTaskByDate(userId,date);
        setTask(data);
        }
        getData();
    }, []);

    const totalHours = tasks.reduce((acc, curr) => {
        if(curr.hours > 0){
            acc += curr.hours
        }
        return acc
    }, 0);

    console.log(history);
    const backHandler = (e) => {
        e.preventDefault();
        console.log(history);
        history.push(getMainUrl());
        console.log(match.path)

    }

    return (
        <div>
            
            <div className="tasks-reviews">
            <h1 className="u-margin-bottom-small">Tasks for date : {match.params.date}</h1>
                        {tasks.map((task) => {
                            return(
                                <div key={task.id}>
                                    <TaskDate
                                        title={task.title}
                                        hours={task.hours}
                                        date={task.date} />
                                </div>
                            )
                        })}
            </div>
            <div className="task__total">
                <h2>
                    Total hours: {totalHours}
                </h2>
                {/* <Button  onClick={backHandler} name={'BACK'}/> */}
                <button className="u-margin-bottom-big" onClick={backHandler}>Back</button>
                <Footer />
            </div>
        </div>
    )
}

export default TaskForDate;