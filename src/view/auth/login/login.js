import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useHistory} from 'react-router';
import Button from '../../../components/button/button';
import { getDashboardUrl } from '../../../constants/routes/routes';
import { loginUser } from '../../../constants/services/services';


import './stylee.scss';



const Login = () => {

  const history = useHistory();

    const formik = useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      
    });
    const [error, setError] = useState('')
  
    const loginHandler = async (e) => {
      e.preventDefault();
      try {
      const {data} = await loginUser(formik.values);
      localStorage.setItem('userId', data.id);
      history.push(getDashboardUrl())
      } catch (error) {
        setError(error.response.data.message)
      }
      
    }
  
      
  
    return (
      <section className="section-login">
        <div className="row">
          <div className="login">
            <div className="login__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-login">Log in</h2>
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
                    type="password"
                    placeholder="Password"
                    className="form__input"
                    name="password"
                    id="password"
                    required
                    {...formik.getFieldProps('password')}
                  />
                </div>
                <h3>{error}</h3>
  
                <Button  className="btn-login" onClick={loginHandler} name={'Login'} />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };


export default Login;