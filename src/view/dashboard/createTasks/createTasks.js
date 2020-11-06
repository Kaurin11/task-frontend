import React from 'react';

import './stylee.scss';

import * as moment from 'moment';
import { useFormik } from "formik";
import Button from '../../../components/button/button';
import { setTask } from '../../../constants/services/services';
import * as Yup from 'yup';


const  CreateTasks = ({selectDate, setShowTask ,getData}) => {

    
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
    

    const submitHandler = async (e) => {
        e.preventDefault();
        await setTask(idOfUser ,formik.values);     
        setShowTask(false);   
    }

    const backHandler = () => {
        setShowTask(false);
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

                            {/* <div className="form__group">
                                <label className="form__label" htmlFor="date">Date</label>
                                <input
                                id="date"
                                name="date"
                                type="date"
                                className="form__input"
                                onChange={formik.handleChange}
                                value={formik.initialValues.date}
                                />
                            </div> */}
                                <div className="u-margin-top-small">
                                    <Button disabled={!(formik.dirty && formik.isValid)} className="btn-submit"  onClick={submitHandler} name={'SUBMIT'}/>
                                    <Button style={buttonStyle} onClick={backHandler} name={'X'}/>
                                    
                                </div>
                            </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CreateTasks;