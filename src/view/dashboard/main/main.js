import React, { useState } from 'react';
import DateTrack from '../../../components/dateTrack/dateTrack';
import Footer from '../../../components/footer/footer';
import Header from '../../../components/header/header';
import CreateTasks from './../createTasks/createTasks';
import Tasks from './../tasks/tasks';

const Main = (props) => {

    
    const [showTask, setShowTask] = useState (false);
    const [selectDate , setSelectDate] = useState(new Date())

    const showTaskHandler = () => {
        setShowTask(true)
    } 

    console.log(props.match.path)

    return (
        <div> 
            <Header 
                setShowTask={setShowTask}
                showTaskHandler={showTaskHandler}
                />
            {showTask ? <div > <CreateTasks
                    selectDate={selectDate} setShowTask={setShowTask}/> </div> : null}
            <DateTrack 
                selectDate={selectDate}
                onDateChange={(value) => setSelectDate(value)}/>
            <Tasks />
            <Footer />
            </div>
    )
}

export default Main;