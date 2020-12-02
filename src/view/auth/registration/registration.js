import React, { useState } from "react";
import { useFormik } from "formik";
import ButtonRegist from "../../../components/buttonRegist/buttonRegist";
import { useHistory } from "react-router";
import { getLoginUrl } from "../../../constants/routes/routes";
import * as Yup from "yup";
import "./stylee.scss";
import { setUser } from "../../../constants/services/services";

const Registration = () => {
  const history = useHistory();
  const [error, setError] = useState();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      username: Yup.string().required("Required"),
      password: Yup.string()
        .min(5, "Too Short,Password must be at least 5 char")
        .required("Required"),
    }),
  });

  const goToLoginHandler = async (e) => {
    e.preventDefault();
    try {
      await setUser(formik.values);
      history.push(getLoginUrl());
    } catch (error) {
      setError(error.response.data.message);
    }
    // console.log(formik.values);
    // setUser(formik.values);
    // history.push(getLoginUrl());
  };

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
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
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
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
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
                {...formik.getFieldProps("username")}
              />
              {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
              ) : null}
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
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <h3>{error}</h3>

            <ButtonRegist
              className="u-margin-bottom-small"
              onClick={goToLoginHandler}
              name={"Regist"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;
