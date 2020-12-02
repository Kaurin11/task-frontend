import React, {  useState } from 'react';

import './stylee.scss';

import * as moment from 'moment';
import { useFormik } from "formik";
import Button from '../../../components/button/button';
import { setTask } from '../../../constants/services/services';
import * as Yup from 'yup';

import {connect} from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import {purchaseTask} from '../../../store/actions/action';

const  CreateTasks = ({selectDate,getTaskStore,setTaskStore,tasksStore ,errorStore,setHideTask}) => {

    const [error, setError] = useState('');
    const idOfUser = localStorage.getItem('userId');
    const formatedDate = moment(selectDate).format('YYYY-MM-DD')
    
    const formik = useFormik ({
        initialValues : {
            title: '',
            hours: '',
            date: formatedDate
        },
        validationSchema : Yup.object({
            title: Yup.string().required('Required'),
            hours: Yup.number()
                .lessThan(8, 'You can not put this number')
                .moreThan(0,'Please enter number')
                .required('Required')
          }),
    })
    
    
// When I create a Task using Redux, the task is written to my database, 
// but it only appears to me when I refresh the page. 
// I had an idea to correct this with the help of conditional re-render. 
// But I failed to solve this problem in the end.
// So I left a solution that works, and commented on the solution where I used Redux
    const submitHandler =async(e) => {
        e.preventDefault();
        try{
            await setTask(idOfUser ,formik.values); 
            setHideTask();      
        } catch (error) {
            setError(error.response.data.message)
          }
        getTaskStore();
        
        // setTaskStore(formik.values);
        // getTaskStore();
        // setHideTask();
    }


    const buttonStyle = {
        cursos: "pointer",
        top:'2rem',
        right: '4rem',
        position:'absolute'
        
      };
    
    
    return (
        <div className="task-popup">
            <div className="task-popup__content">
            <h2 className="heading-popup">Create a task:</h2>
                <div className="row">
                    <div className="task">
                        <div className="task__form">
                            <form  className="form">

                            <div className="form__group">
                                <label className="form__label" htmlFor="title">Task</label>
                                <input
                                id="title"
                                name="title"
                                type="text"
                                className="form__input"
                                placeholder="Enter title here..."
                                onChange={formik.handleChange}
                                value={formik.values.title}
                                onBlur={formik.handleBlur}
                                />
                                {formik.touched.title && formik.errors.title ? (
                                    <div>{formik.errors.title}</div>
                                ) : null}
                            </div>
                            

                            <div className="form__group">
                                <label className="form__label" htmlFor="hours">Hours</label>
                                <input
                                id="hours"
                                name="hours"
                                type="text"
                                className="form__input"
                                placeholder="Add hours here..."
                                onChange={formik.handleChange}
                                value={formik.values.hours}
                                onBlur={formik.handleBlur}
                                />
                                {formik.touched.hours && formik.errors.hours ? (
                                    <div>{formik.errors.hours}</div>
                                ) : null}

                                <div className="u-margin-top-small">
                                    <Button disabled={!(formik.dirty && formik.isValid)} className="btn-submit"  onClick={submitHandler} name={'SUBMIT'}/>
                                    <Button style={buttonStyle} onClick={() => setHideTask()} name={'X'}/>
                                    
                                </div>
                                <h3>{error}</h3>
                            </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasksStore: state.reducer.tasks,
        errorStore: state.reducer.error,
        hideTaskStore: state.showTaskReducer.showTask

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTaskStore : (values) => dispatch(actionCreators.purchaseTask(values)),
        getTaskStore : (tasks) => dispatch(actionCreators.getTask(tasks)),
        setHideTask : () => dispatch(actionCreators.setHideTask())
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(CreateTasks);