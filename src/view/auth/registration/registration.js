import React from 'react';
import {useFormik} from 'formik';
import ButtonRegist from '../../../components/buttonRegist/buttonRegist';
import { useHistory} from 'react-router';
import { getLoginUrl } from '../../../constants/routes/routes';
import './stylee.scss';
import { setUser } from '../../../constants/services/services';

const Registration = () => {

    const history = useHistory();

    const formik = useFormik({
        initialValues : {
            firstName: '',
            lastName: '',
            username: '',
            password: ''
        }
    })

    const goToLoginHandler =() => {
        console.log(formik.values)
        setUser(formik.values)
        history.push(getLoginUrl());

    }

    return (

        <section className="section-login">
            <div className="row">
                <div className="login">
                    <form action="#" className="form">
                        <div className="u-margin-bottom-medium">
                        <h2 className="heading-login">Registration</h2>
                        </div>
        
                        <div className="form__group">
                        <label className="form__label" htmlFor="firstName"></label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="form__input"
                            name="firstName"
                            id="firstName"
                            required
                            {...formik.getFieldProps('firstName')}
                        />
                        </div>

                        <div className="form__group">
                        <label className="form__label" htmlFor="lastName"></label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="form__input"
                            name="lastName"
                            id="lastName"
                            required
                            {...formik.getFieldProps('lastName')}
                        />
                        </div>

                        <div className="form__group">
                        <label className="form__label" htmlFor="username"></label>
                        <input
                            type="text"
                            placeholder="Username"
                            className="form__input"
                            name="username"
                            id="username"
                            required
                            {...formik.getFieldProps('username')}
                        />
                        </div>
        
                        <div className="form__group">
                        <label className="form__label" htmlFor="password"></label>
                        <input
                            type="text"
                            placeholder="Password"
                            className="form__input"
                            name="password"
                            id="password"
                            required
                            {...formik.getFieldProps('password')}
                        />
                        </div>
        
                        <ButtonRegist className="u-margin-bottom-small" onClick={goToLoginHandler} name={'Regist'} />
                    </form>
                </div>
                </div>
            </section>
    )
}

export default Registration;